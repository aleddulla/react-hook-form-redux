import { combineReducers } from 'redux';

const initialState = {
  data: {},
  loading: false
}

const selectedSongReducer = (selectedSong = null, action) => {
    switch (action.type) {
      case 'SONG_SELECTED':
        return action.payload;      
    }
  
    return selectedSong;
};

const moviesReducer = (state = [], action) => {
  switch (action.type) {
    case 'SEARCH_MOVIES':
        return action.payload;
    }

  return state;
};

const loadReducer = (state = initialState, action) => {
  switch(action.type) {
    case 'REQUEST_SENT': 
      return {...state, loading: true }
    case 'REQUEST_DONE': 
      return {...state, loading: false }
  }
  return state;
}


export default combineReducers({
  selectedSong: selectedSongReducer,
  movies: moviesReducer,
  loading: loadReducer
});
