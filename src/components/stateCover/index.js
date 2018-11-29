import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import './index.css'

class StateCover extends PureComponent {
    state = {
        isPlay: false
    };

    componentWillReceiveProps(){
        this.setState({ isPlay: false })
    }

    pausePlayTrack = () => {
        const audio = document.querySelector('audio');
        this.setState({ isPlay: !this.state.isPlay })
        this.state.isPlay ? audio.pause() : audio.play();
    };
   
    render(){
        const { info, isOpenList } = this.props,
            tracks = this.props.__Store.tracks[0];
        let playId = this.props.__Store.selectTrack[0],
            selectObj = {};
        if(tracks){
            selectObj = tracks.filter(x => x.id === playId);
        }
        console.log(selectObj);
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
                            <audio style={{display: 'none'}} src={`https://api.soundcloud.com/tracks/${playId}/stream?client_id=7172aa9d8184ed052cf6148b4d6b8ae6`} controls/>
                            <div className="track-bar">
                                {/* <span style={{width: '82%'}} className="track-bar-line">
                                    <span className="track-bar-value">2.50</span>
                                </span> */}
                            </div>
                            <h2 className="track-albom">{selectObj[0].user.username}</h2>
                            <h3 className="track-caption">
                                <span className="track-caption-text">{selectObj[0].title}</span>
                            </h3>
                            <div className="controller">
                                {/*<a className="controller-btn" href="#">*/}
                                {/*<i className="i i_shufle"/>*/}
                                {/*</a>*/}
                                {/* <a className="controller-btn" href="#">
                                    <i className="i i_prev"/>
                                </a> */}
                              
                                <span className="controller-btn" onClick={this.pausePlayTrack.bind()}>
                                    {this.state.isPlay ? ( <i className="i i_pause"/>) : ( <i className="i i_play"/>)}
                                </span>
                                   
                                
                                {/* <a className="controller-btn" href="#">
                                    <i className="i i_next"/>
                                </a> */}
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