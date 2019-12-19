import React from 'react';
import { connect } from 'react-redux';

import './selected_song.scss';

class SelectedSong extends React.Component {

  render () {
    let {selectedSong} = this.props;
    selectedSong = selectedSong || {};
    return (
      <div className="ui segment">
        <h3 className="ui header header_list_song"> Selected song:</h3>
        <div className="image">
          <img src={selectedSong.image || '/images/noimg.png'}/>
        </div>
        <div className="content">
          <div className="header">{selectedSong.title || 'no choose'}</div>
          <div className="meta">
            <a>{selectedSong.duration}</a>
          </div>
          <div className="description">
            {selectedSong.description || <img className="ui wireframe image" src="/images/paragraph.png"/>}
          </div>
        </div>
        <div className="extra content">
        </div>
      </div>
    );
    // return (
    //   <div>
    //     selected song: pls choose one
    //   </div>
    // );

  }

}

const mapStateToProps = (state) => {
  console.log('mapStateToProps from selectedSong');
  return {
    selectedSong: state.selectedSong
  };
};

export default connect(mapStateToProps)(SelectedSong);




