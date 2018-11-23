import React from 'react'
import { connect } from 'react-redux';
import './index.css'

const StateCover = (props) => {
        const { info, isOpenList } = props,
        audio = document.querySelector('audio'),
        tracks = props.__Store.tracks[0];
        let playId = props.__Store.selectTrack[0],
            selectObj = {};
        if(tracks){
            selectObj = tracks.filter(x => x.id === playId);
        }
        const handleClick = () => {
            audio.play();
        };
        return(
            
            <div className={isOpenList ? 'state state-cover state-cover-up' : 'state state-cover'}>
                <div className="panel panel_top">
                    <span className="panel-side-title"><i className="i i_arrow"/><span className="panel-side-tittle-text">Now Playing</span></span>
                </div>
                <div className="track">
                <div className="track-cover" style={{maxWidth: '70%', backgroundImage: `url(${info})`}}/>
                    {selectObj[0] ? (
                        <div>
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
                                <span className="controller-btn" onClick={handleClick.bind()}>
                                    <i className="i i_play"/>
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