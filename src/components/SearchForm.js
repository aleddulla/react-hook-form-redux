import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';
import { searchMovies } from '../actions/index';
import { connect, useDispatch } from 'react-redux';

const SearchForm = () => {

    const {register, handleSubmit, errors } = useForm();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        dispatch(searchMovies(data));
    };

    return (
        <div className="ui row" > 
            <div className="column eight wide">
                <form onSubmit={handleSubmit(onSubmit)} className="ui form error">
                    <div>
                        <input name="firstname" ref={register({ required: true })} />
                        {errors.firstname && 'First name is required.'}

                        <input name="lastname" ref={register({ required: true })}/>
                        {errors.lastname && 'Last name is required.'}
                        <input type="submit" className="ui button primary"/>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default connect(null, { searchMovies })(SearchForm);
