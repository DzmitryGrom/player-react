import React, { PureComponent } from 'react'
import StatePlayItem from '../statePlayItem'
import './index.css'

export class StatePlayList extends PureComponent {
    state = {
        selectTrackId: null
    }
    render(){
        const {onButtonClick, isOpenList, tracksItems} = this.props,

        statePlayItem = tracksItems.map((tracksItems, index) => 
            <li key = {tracksItems.id}  onClick={this.handleClick.bind(this, tracksItems.id)}>
                <StatePlayItem isSelect={this.state.selectTrackId === tracksItems.id} trackItem={tracksItems} />
            </li>
        );
        return(
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
    handleClick = selectTrackId => this.setState({ selectTrackId: this.state.selectTrackId === selectTrackId ? null : selectTrackId })
}

export default StatePlayList;