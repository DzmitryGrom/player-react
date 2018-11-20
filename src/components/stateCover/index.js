import React from 'react'
import { connect } from 'react-redux';
import './index.css'

const StateCover = (props) => {
        const { info, isOpenList, track } = props;
        let tr = track.track[0] || 236560898;
        console.log(tr);
        return(
            <div className={isOpenList ? 'state state-cover state-cover-up' : 'state state-cover'}>
                <div className="panel panel_top">
                    <span className="panel-side-title"><i className="i i_arrow"/><span className="panel-side-tittle-text">Now Playing</span></span>
                </div>
                <div className="track">
                    <audio src={`https://api.soundcloud.com/tracks/${tr}/stream?client_id=7172aa9d8184ed052cf6148b4d6b8ae6`} controls/>
                    <div className="track-cover" style={{maxWidth: '70%', backgroundImage: `url(${info})`}}/>
                    <div className="track-bar">
                        <span style={{width: '82%'}} className="track-bar-line" href="#"><span className="track-bar-value">2.50</span></span>
                    </div>
                    <h2 className="track-albom">Cannonballs</h2>
                    <h3 className="track-caption">
                        <span className="track-caption-text">Louder </span>
                        -
                        <span className="track-caption-autor"> Lea Michele</span>
                    </h3>
                </div>
                <div className="controller">
                    {/*<a className="controller-btn" href="#">*/}
                    {/*<i className="i i_shufle"/>*/}
                    {/*</a>*/}
                    <a className="controller-btn" href="#">
                        <i className="i i_prev"/>
                    </a>
                    <a className="controller-btn" href="#">
                        <i className="i i_play"/>
                    </a>
                    <a className="controller-btn" href="#">
                        <i className="i i_next"/>
                    </a>
                    {/*<a className="controller-btn" href="#">*/}
                    {/*<i className="i i_repeat"/>*/}
                    {/*</a>*/}
                </div>
            </div>
        )
};
const mapStateToProps = function(state) {
    return {track: state}
};

export default connect(mapStateToProps)(StateCover);