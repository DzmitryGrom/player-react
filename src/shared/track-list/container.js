import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import { bindActionCreators } from 'redux';
import StatePlayListComponent from './component';
import Player from '../../playerControl';
import { getVisibleTracks, getPlayTrack } from '../../core/store/selectors';
import * as Action from '../../features/common/actions';


class TrackListContainer extends PureComponent {

  handleClick = (track) => {
    console.log(track);
    const { tracks, setTrack } = this.props;
    Player.getPositonSelectTrack(track, tracks);
    setTrack(track);
    Player.select(track.id);

  };

  render() {
    const { onToggleListBottom, isOpenListBottom, tracks, playTrack } = this.props;
    return (
      <StatePlayListComponent
        isOpenListBottom={isOpenListBottom}
        onToggleListBottom={onToggleListBottom}
        tracks={tracks}
        playTrack={playTrack}
        handleClick={this.handleClick}
      />
    )
  }
};

const mapStateToProps = state => ({
  tracks: getVisibleTracks(state),
  playTrack: getPlayTrack(state),
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(TrackListContainer);
