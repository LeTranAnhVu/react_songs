import './song.scss';
import React from 'react';
import { selectSong } from '../actions';
import { connect } from 'react-redux';
const Song = (props) => {
  const song = props.song;
  return (
    <div className="item">
      <div className="content">
        <div className="header">{song.title}</div>
        <button className="ui negative basic button btn-right"
                onClick={() => {props.selectSong(song)}}
        >Select</button>
      </div>
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     selectedSong: state.selectedSong
//   };
// };


export default connect(null, {selectSong})(Song);
