import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';
import LoadingSpinner from './LoadingSpinner';

class SongList extends Component {

  renderList(movies) {
    if (!movies) {
      return;
    }


    return movies && movies.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      );
    });
  }

  render() {
    const { loading, movies, tabOn } = this.props;
    return (
      <div>
       {/** <div>
          <div className="ui row">
            <div className="column eight wide">
              <button style={{ fontSize: '24px' }} onClick={(e) => handleTabOnOff()}>Show Rooms
                {tabOn ? <i className='fas fa-arrow-circle-up'></i> : <i className="fas fa-arrow-circle-down"></i>}
              </button>
            </div>
          </div>
        </div>*/}
        {tabOn ? <div className="ui divided list">
          {this.renderList(movies)}
        </div>: null}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.movies);
  return {
    movies: state.movies.data,
    tabOn: state.movies.tabOn
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
