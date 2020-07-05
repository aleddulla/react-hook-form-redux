import React, { useState } from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
import SearchForm from './SearchForm';
import ViewMovies from './ViewMovies';
import LoadingSpinner from './LoadingSpinner';
import { connect } from 'react-redux';

const App = ({ loading }) => {
  const [tabOn, setTabOn] = useState(false);

  return (
    <div className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SearchForm />
        </div>
        <div className="column eight wide">
          <ViewMovies handleTabOnOff={() => setTabOn(!tabOn)} tabOn={tabOn} />
        </div>
      </div>      
      {loading? <LoadingSpinner />: (<div className="ui row">
        <div className="column eight wide">
          <SongList/>
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>)}
    </div>
  );
};

const mapStateToProps = (state) => {
  return { loading: state.loading.loading };
};

export default connect(mapStateToProps)(App);
