import React from 'react';
import { useDispatch } from 'react-redux';
import { viewNewMovies } from '../actions/index';

const ViewMovies = () => {

    const dispatch = useDispatch();

    const handleViewMovies = () => {
        dispatch(viewNewMovies());        
    };

    return (
        <div className="ui row">
            <div className="column eight wide">
                <h3>View Movies</h3>
                <button className="ui button primary" onClick={handleViewMovies}>View Movies</button>
            </div>
        </div>
    );
};

export default ViewMovies;