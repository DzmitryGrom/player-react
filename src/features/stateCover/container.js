import { connect } from 'react-redux';
import React, { PureComponent } from 'react';
import Player from '../../playerControl';
import { bindActionCreators } from 'redux';
import StateCoverComponent from './component';
import * as Action from '../common/actions/actions'


class StateCoverContainer extends PureComponent {

  state = {
    isPlay: true,
    isLoopTrack: false,
    curTime: '00:00',
    curWidth: '0'
  };

  timeline = React.createRef();

  componentDidMount() {
    // detected end track
    Player.endedTrack(() => {
      if (!this.state.isLoopTrack) this.onPlayNext();

      if (this.state.isLoopTrack) this.onPlayButton();
    });
    // set progressBar
    Player.onTime((time, width) => {
      this.setState({ curTime: time, curWidth: width });
    });
  }

  //button prev
  onPlayPrev = () => {
    if (Player.curPosition > 0) {
      Player.prevPlayTrack()
      this.props.setTrack(this.props.tracks.items[Player.curPosition]);
      Player.select(this.props.tracks.items[Player.curPosition].id);
    }
    return
  }
  //button play
  onPlayButton = () => {
    this.setState({ isPlay: !this.state.isPlay });
    Player.togglePLay();
  }
  //button next
  onPlayNext = () => {
    if (Player.curPosition + 1 < Player.allTracks) {
      Player.nextPlayTrack();
      this.props.setTrack(this.props.tracks.items[Player.curPosition]);
      Player.select(this.props.tracks.items[Player.curPosition].id);
    }
    return
  }
  //button loop
  onTrackLoop = () => {
    this.setState({ isLoopTrack: !this.state.isLoopTrack });
  }
  // rewind track
  rewindTrack = (e) => {
    const { timeline } = this;
    Player.trackRewind(timeline, e);
  }

  render() {
    const { isOpenListBottom, isOpenListTop, playTrack } = this.props;
    const { isPlay, isLoopTrack, curTime, curWidth } = this.state;
    return (
      <StateCoverComponent
        isOpenListBottom={isOpenListBottom}
        isOpenListTop={isOpenListTop}
        playTrack={playTrack}
        isPlay={isPlay}
        isLoopTrack={isLoopTrack}
        curTime={curTime}
        curWidth={curWidth}
        onPlayPrev={this.onPlayPrev}
        onPlayButton={this.onPlayButton}
        onPlayNext={this.onPlayNext}
        onTrackLoop={this.onTrackLoop}
        rewindTrack={this.rewindTrack}
        getTimeline={this.timeline}
      />
    )
  }

};

const mapStateToProps = obj => ({
  ...obj
});

const mapDispathToProps = dispatch => ({
  ...bindActionCreators(Action, dispatch)
});

export default connect(mapStateToProps, mapDispathToProps)(StateCoverContainer);