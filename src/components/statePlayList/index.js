import React, { Component } from 'react'
import { StatePlayItem } from '../statePlayItem'
import { connect } from 'react-redux';
import './index.css'

class StatePlayList extends Component {
    handleClick = selectTrackId => {
        this.props.onSelectTrack(selectTrackId);
        setTimeout(function() {
            document.querySelector('audio').play();
        }.bind(this),0)
    };

    getPlayId = () => this.props.__Store.selectTrack[0];

    render(){
        const { onButtonClick, isOpenList } = this.props;
       
        if (this.props.__Store.tracks.length > 0) {
            const statePlayItem = this.props.__Store.tracks[0].map((tracksItem, index) =>
                <li key={tracksItem.id} onClick={this.handleClick.bind(this, tracksItem.id)}>
                    <StatePlayItem
                        isSelect={this.getPlayId() === tracksItem.id}
                        trackItem={tracksItem}
                    />
                </li>
            );
            return (
                <div className={isOpenList ? 'state state-playlist state-playlist-active' : 'state state-playlist'}>
                    <div className="panel panel_top panel_bg" onClick={onButtonClick}>
                        <span className="top-panel-text">Playlist</span>
                    </div>
                    <ul className="playlist">
                        {statePlayItem}
                    </ul>
                </div>
            )
        }
        return null
    }
   
}

export default connect(
    state => ({
        __Store: state
    }),
    dispatch => ({
        onSelectTrack: (trackId) => {
            dispatch({ type: 'PLAY_TRACK_ID', payload: trackId })
        }
    })
)(StatePlayList);
