import React from 'react';

import SongList from './SongList';
import SelectedSong from './SelectedSong';

const App = () => {
  return (
    <section className="ui container" style={{marginTop: '40px'}}>
      <div className="ui grid">
        <div className="ten wide column">
          <SongList/>
        </div>
        <div className="six wide column">
          <SelectedSong/>
        </div>
      </div>

    </section>
  );
};

export default App;

