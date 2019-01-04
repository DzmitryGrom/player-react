import React, { Component } from 'react'
import { connect } from 'react-redux';
import './index.css'

class StateCover extends Component {
    state = {
        isPlay: true
    };
       
    getTracks = () => this.props.__Store.tracks[0];

    getPlayId = () => this.props.__Store.selectTrack[0];

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

    timeChange = () => {


        let size = (this.getPlayer().currentTime * 100 / this.getPlayer().duration).toFixed(1) + "%";

        const progressBar = document.querySelector('#progressBar');
              
        progressBar.style.width = size;
    }

    nextPlayTrack = () => {
        let curIndex = this.getPositonTrack();
        ++curIndex;
        this.props.onSelectTrack( this.getTracks()[curIndex].id );
        this.pausePlayTrack(curIndex);
    }

    prevPlayTrack = () => {
        let curIndex = this.getPositonTrack();
        --curIndex;
        this.props.onSelectTrack( this.getTracks()[curIndex].id );
        this.pausePlayTrack(curIndex);
    }

    render(){
        const { info, isOpenList } = this.props;
        let selectObj = {};

        if(this.getTracks()){
            selectObj = this.getTracks().filter(x => x.id === this.getPlayId());
        }

        return(
            <div className={isOpenList ? 'state state-cover state-cover-up' : 'state state-cover'}>
                <div className="panel panel_top">
                    <span className="panel-side-title"><i className="i i_arrow"/><span className="panel-side-tittle-text">Now Playing</span></span>
                </div>
                <div className="track">
                <div className="track-cover" style={{maxWidth: '70%', backgroundImage: `url(${info})`}}/>
                    {selectObj[0] ? (
                        <div>
                            <div className="track-cover-author" style={{ backgroundImage: `url(${selectObj[0].user.avatar_url})` }}/>
                            <audio onTimeUpdate={this.timeChange} style={{display: 'none'}} src={`https://api.soundcloud.com/tracks/${this.getPlayId()}/stream?client_id=7172aa9d8184ed052cf6148b4d6b8ae6`} controls/>
                            <div id="defaultBar" className="track-bar" >
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
                                {this.getPositonTrack() >= 1 ? ( <div onClick={this.prevPlayTrack}><i className="i i_prev"/></div> ) : null}
                                </div>
                              
                                <div className="controller-btn" onClick={this.pausePlayTrack}>
                                    {this.state.isPlay ? ( <i className="i i_pause"/>) : ( <i className="i i_play"/>)}
                                </div> 
                                
                                <div className="controller-btn">
                                    {(this.getPositonTrack() + 1) < this.getTracks().length ? ( <div onClick={this.nextPlayTrack}><i className="i i_next"/></div> ) : null}
                                </div>
                                {/*<a className="controller-btn" href="#">*/}
                                {/*<i className="i i_repeat"/>*/}
                                {/*</a>*/}
                            </div>
                       </div>
                    ) : null }
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