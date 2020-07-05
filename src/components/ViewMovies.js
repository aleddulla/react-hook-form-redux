import React from 'react';
import { useDispatch } from 'react-redux';
import { viewNewMovies } from '../actions/index';
import { connect } from 'react-redux';

const ViewMovies = ({ tabOn }) => {

    const dispatch = useDispatch();

    return (
        <div className="ui row">
            <div className="column eight wide">
                <h3>View Movies</h3>
                <button style={{ fontSize: '24px' }} onClick={() => dispatch(viewNewMovies())}>Show Rooms
                {tabOn ? <i className='fas fa-arrow-circle-up'></i> : <i className="fas fa-arrow-circle-down"></i>}
              </button>
            </div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log(state);
    return { 
        tabOn: state.movies.tabOn
    };
};

export default connect(mapStateToProps)(ViewMovies);