import React from 'react'
import StatePlayItem from '../statePlayItem/index'
import Player from '../../playerControl'

import './index.css'
import '../../commonStyle.css'

const StatePlayListBottom = props => {
    const { onToggleListBottom, isOpenListBottom, isOpenListTop, tracks, setTrack, playTrack } = props;

    function handleClick(track) {
        Player.getPositonSelectTrack(track, tracks);
        setTrack(track);
        Player.select(track.id);
       
    };

    return ( 
        <div className={"state state-playlist-bottom" + (isOpenListBottom ? ' state-playlist-bottom-active' : '') + (isOpenListTop ? ' state-playlist-bottom-disactive' : '')}>
            <div className="panel panel_top panel_bg" onClick={onToggleListBottom}>
                <span className="top-panel-text">Playlist</span>
            </div>
            <ul className="playlist">
                {tracks.isReady ? tracks.items.map((tracksItem, index) =>(
                    <li key={index} onClick={handleClick.bind(this, tracksItem)}>
                        <StatePlayItem
                            {...tracksItem}
                            isSelect={playTrack.id === tracksItem.id}
                        />
                    </li>)) : 'LOAD'
                }
            </ul>
        </div>
    )
}

export default StatePlayListBottom;
