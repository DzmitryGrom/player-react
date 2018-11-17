import React, { PureComponent } from 'react'
import StatePlayItem from '../statePlayItem'
import './index.css'

export class StatePlayList extends PureComponent {
    render(){
        const {onButtonClick, isOpenList} = this.props;
        return(
            <div className={isOpenList ? 'state state-playlist state-playlist-active' : 'state state-playlist'}>
                <div className="panel panel_top panel_bg" onClick={onButtonClick}>
                    <span className="top-panel-text">Playlist</span>
                </div>
                <div className="playlist">
                    <StatePlayItem/>
                </div>
            </div>
        )
    }
}

export default StatePlayList;