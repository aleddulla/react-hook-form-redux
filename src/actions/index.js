// Action creator
export const selectSong = song => {
  // Return an action
  return {
    type: 'SONG_SELECTED',
    payload: song
  };
};

export const searchMovies =  (data) => dispatch => {
  console.log(data);
  dispatch({type: "REQUEST_SENT"});

  setTimeout(() => {
    dispatch({type: "REQUEST_DONE"});
  }, 3000);

  const movies = [
    { title: 'Sarileru Nekevvaru', duration: '3:05' },
    { title: 'Srimanthudu', duration: '2:30' },
    { title: 'Maharshi', duration: '3:15' },
    { title: 'Bharath Ane Nenu', duration: '2:45' }
  ];

  dispatch({ type: 'SEARCH_MOVIES', payload: movies});
};

export const viewNewMovies = (data) => dispatch  =>  {
  console.log();
  dispatch({type: "REQUEST_SENT"});

  setTimeout(() => {
    dispatch({type: "REQUEST_DONE"});
  }, 3000);

  const newMovies =  [
    { title: 'No Scrubs', duration: '4:05' },
    { title: 'Macarena', duration: '2:30' },
    { title: 'All Star', duration: '3:15' },
    { title: 'I Want it That Way', duration: '1:45' }
  ];
  
  dispatch({ type: 'SEARCH_MOVIES', payload: newMovies});
  
};


