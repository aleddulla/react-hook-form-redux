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
    const { loading, movies } = this.props;
    return (
        <div className="ui divided list">
          {loading ? <LoadingSpinner /> : this.renderList(movies)}
        </div>
      );
  }
}

const mapStateToProps = state => {
  console.log(state.movies);
  return { 
    movies: state.movies,
    loading: state.loading.loading
  };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
