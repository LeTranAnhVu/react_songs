import React from 'react';
import { connect } from 'react-redux';
import Song from './Song';
import './list_song.scss';
class SongList extends React.Component {
  render () {
    console.log(this.props);
    const {songs} = this.props;
    return (
      <div className="ui segment">
        <h3 className="ui header header_list_song">List Song</h3>
        <div className="ui celled list">
          {
            songs.map((song, index) => {
              return (
                <Song key={index} song={song}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log('mapStateToProps from list',state);

  return {
    songs: state.songs
  };
};

export default connect(mapStateToProps)(SongList);

