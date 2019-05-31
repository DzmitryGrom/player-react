import React, { PureComponent } from 'react';
import Player from '../../playerControl';
import './index.css';

class StateCover extends PureComponent {
    
    state = {
        isPlay: true,
        isLoopTrack: false,
        curTime: '00:00',
        curWidth: '0'
    };

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
        Player.trackRewind(this.timeline, e);
    }
 
    render() {
        const { isOpenListBottom, isOpenListTop, playTrack } = this.props;
        return (
            <div className={(!playTrack.id ? ' disabled' : null)}>
                <div className="background" style={{ backgroundImage: playTrack.id ? `url(${playTrack.user.avatar_url})` : null }} />
                <div className={"state state-cover" + (isOpenListBottom ? ' state-cover-up' : '') + (isOpenListTop ? ' state-cover-down' : '')}>
                    <div className="panel panel_top">
                        <span className="panel-side-title">
                            <i className="i i_arrow" /><span className="panel-side-tittle-text">Now Playing {playTrack.id ? <span className="panel-side-tittle-genre">{playTrack.genre}</span> : null}</span>
                        </span>
                    </div>
                    <div className="track-cover">
                        {playTrack.id ?  <div className="track-cover-author" style={{backgroundImage: `url(${playTrack.user.avatar_url})`}}/> : null}
                    </div>
                   
                    <h2 className="track-albom">{playTrack.id ? playTrack.user.username : 'Author name'}</h2>
                    <h3 className="track-caption">
                        <span className="track-caption-text">{playTrack.id ? playTrack.title : 'Track name'}</span>
                    </h3>
                    
                    <div id="defaultBar" className="track-bar"  onClick={playTrack.id ? this.rewindTrack : null}  ref={(timeline) => { this.timeline = timeline }}>
                        <span  id="progressBar" style={{ width: `${this.state.curWidth}` }} className="track-bar-line">
                            <span id="curTime" className="track-bar-value">{this.state.curTime}</span>
                        </span>
                    </div>

                    <div className="controller">
                        <div className={"controller-btn" + (!Player.curPosition > 0 ? ' disabled' : '')}>
                            <i className="i icon-backward"  onClick={this.onPlayPrev} />
                        </div>
                        <div className="controller-btn">
                            <i className={this.state.isPlay ? "i icon-play" : "i icon-pause"}   onClick={playTrack.id ? this.onPlayButton : null}/>
                        </div> 
                    
                        <div className={"controller-btn" + (Player.curPosition + 1 === Player.allTracks ? ' disabled' : '')}>
                            <i className="i icon-forward" onClick={this.onPlayNext}/>
                        </div>
                        <div className="controller-btn">
                            <i className={this.state.isLoopTrack ? "i icon-loop icon-loop-active" : "i icon-loop"}  onClick={this.onTrackLoop}/>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
   
};

export default StateCover;  