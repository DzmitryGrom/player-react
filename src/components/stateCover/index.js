import React, { Component } from 'react'
import { connect } from 'react-redux';
import './index.css'

class StateCover extends Component {
    state = {
        isPlay: true,
        isLoopTrack: false
    };
       
    getTracks = () => this.props.__Store.tracks[0];

    getPlayId = () => this.props.__Store.selectTrack[0];

    getCurTime = () => document.querySelector('#curTime');

    getProgressBar = () => document.querySelector('#progressBar');

    getPlayer = () => document.querySelector('audio');

    getPositonTrack = () => {
        for ( let i = 0; i < this.getTracks().length; i++) {
            if ( this.getTracks()[i].id === this.getPlayId()) {
                return i
            }
        }
    }
  
    pausePlayTrack = (i) => {
        if(typeof i === 'number'){
            setTimeout(function() {
                this.setState({ isPlay: true });
                this.getPlayer().play();
            }.bind(this),0)
        } else {           
            this.setState({ isPlay: !this.state.isPlay });
            this.state.isPlay ? this.getPlayer().pause() : this.getPlayer().play(); 
        }
    };

    rewindTrack = (e) => {
        this.getPlayer().currentTime = ((e.pageX - this.timeline.offsetLeft) / this.timeline.offsetWidth) * this.getPlayer().duration;
    }

    endedTrack = () => {
        if (this.getPositonTrack() < this.getTracks().length - 1 && !this.state.isLoopTrack) {
            this.nextPlayTrack();
        }
        if (this.state.isLoopTrack) {
            this.getPlayer().play();
        } else {
            this.setState({ isPlay: false });
            this.getPlayer().pause();
            this.getPlayer().currentTime = 0;
        }

    }

    timeChange = () => {
        let time = new Date(this.getPlayer().currentTime * 1000);
        this.getCurTime().innerHTML = `${(time.getUTCHours() ? time.toUTCString().slice(17, 25) : time.toUTCString().slice(20, 25))}`;  
        this.getProgressBar().style.width = (this.getPlayer().currentTime * 100 / this.getPlayer().duration).toFixed(1) + "%";
    }

    nextPlayTrack = () => {
        let curIndex = this.getPositonTrack();
        ++curIndex;
        this.props.onSelectTrack( this.getTracks()[curIndex].id );
        this.pausePlayTrack(curIndex);
    }

    loopTrack = () => {
        this.setState({ isLoopTrack: !this.state.isLoopTrack });
    }

    prevPlayTrack = () => {
        let curIndex = this.getPositonTrack();
        --curIndex;
        this.props.onSelectTrack( this.getTracks()[curIndex].id );
        this.pausePlayTrack(curIndex);
    }

    render(){
        const { isOpenList } = this.props;
        let selectObj = {};

        if(this.getTracks()){
            selectObj = this.getTracks().filter(x => x.id === this.getPlayId());
        }

        return(
            <div>
                <div className="background"  style={{backgroundImage: selectObj[0] ? `url(${selectObj[0].user.avatar_url})` : null}}></div>
                <div className={isOpenList ? 'state state-cover state-cover-up' : 'state state-cover'}>
                <div className="panel panel_top">
                    <span className="panel-side-title"><i className="i i_arrow"/><span className="panel-side-tittle-text">Now Playing</span></span>
                </div>
                <div className="track">
                <div className="track-cover"/>
                    {selectObj[0] ? (
                        <div>
                            <div className="track-cover-author" style={{ backgroundImage: `url(${selectObj[0].user.avatar_url})` }}/>
                            <audio  onEnded={ this.endedTrack }  onTimeUpdate={this.timeChange} style={{display: 'none'}} src={`https://api.soundcloud.com/tracks/${this.getPlayId()}/stream?client_id=7172aa9d8184ed052cf6148b4d6b8ae6`} controls/>
                            <div id="defaultBar" className="track-bar" onClick={this.rewindTrack}  ref={(timeline) => { this.timeline = timeline }}>
                                <span  id="progressBar" className="track-bar-line">
                                    <span id="curTime" className="track-bar-value">00:00</span>
                                </span>
                            </div>
                            <h2 className="track-albom">{selectObj[0].user.username}</h2>
                            <h3 className="track-caption">
                                <span className="track-caption-text">{selectObj[0].title}</span>
                            </h3>
                            <div className="controller">
                                {/*<a className="controller-btn" href="#">*/}
                                {/*<i className="i i_shufle"/>*/}
                                {/*</a>*/}
                                <div className="controller-btn">
                                <i className={this.getPositonTrack() >= 1 ? "i icon-backward" : "i icon-backward disabled"} onClick={this.getPositonTrack() >= 1 ? this.prevPlayTrack : null} />    
                                </div>
                              
                                <div className="controller-btn" onClick={this.pausePlayTrack}>
                                    <i className={this.state.isPlay ? "i icon-pause" : "i icon-play"} />
                                </div> 
                                
                                <div className="controller-btn">
                                    <i className={(this.getPositonTrack() + 1) < this.getTracks().length ? "i icon-forward" : "i icon-forward disabled"} onClick={(this.getPositonTrack() + 1) < this.getTracks().length ? this.nextPlayTrack : null} />
                                </div>
                                <div className="controller-btn">
                                    <i className={this.state.isLoopTrack ? "i icon-loop icon-loop-active" : "i icon-loop"} onClick={this.loopTrack}/>
                                </div>
                            </div>
                       </div>
                    ) : null }
                </div>
            </div>
            </div>
        )
    }
   
};

export default connect(
    state => ({
        __Store: state
    }),
   
    dispatch => ({
        onSelectTrack: (trackId) => {
            dispatch({ type: 'PLAY_TRACK_ID', payload: trackId })
        }
    })
)(StateCover);  