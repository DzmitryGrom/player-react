import React, { Component } from 'react'
import { StatePlayItem } from '../statePlayItem'
import { connect } from 'react-redux';
import './index.css'

class StatePlayList extends Component {
    state = {
        selectTrackId: null
    };

    handleClick = selectTrackId => {
        //this.props.onSelectTrackId(selectTrackId);
        if (this.state.selectTrackId !== selectTrackId) {
            this.props.onSelectTrackId(selectTrackId)
            this.setState({ selectTrackId: this.state.selectTrackId === selectTrackId ? null : selectTrackId });

        }
        return
    };

    render() {
        const { onButtonClick, isOpenList, tracksItems } = this.props;
        if (tracksItems) {
            const statePlayItem = tracksItems.map((tracksItem, index) =>
                <li key={tracksItem.id} onClick={this.handleClick.bind(this, tracksItem.id)}>
                    <StatePlayItem
                        isSelect={this.state.selectTrackId === tracksItem.id}
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
        testStore: state
    }),
    dispatch => ({
        onSelectTrackId: (trackId) => {
            dispatch({ type: 'PLAY_TRACK_ID', payload: trackId })

        }
    })
)(StatePlayList);
