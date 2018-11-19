import React, { PureComponent } from 'react'
import { StatePlayItem } from '../statePlayItem'
import './index.css'

export class StatePlayList extends PureComponent {
    state = {
        selectTrackId: null
    };

    render() {
        const { onButtonClick, isOpenList, tracksItems } = this.props;
        console.log(tracksItems);
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

    handleClick = selectTrackId => {
        if (this.state.selectTrackId !== selectTrackId) {
            this.setState({ selectTrackId: this.state.selectTrackId === selectTrackId ? null : selectTrackId })
        }
        return
    }
}

export default StatePlayList;