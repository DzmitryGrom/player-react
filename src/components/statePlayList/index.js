import React from 'react'
import StatePlayItem from '../statePlayItem'
import Player from '../../playerControl'

import './index.css'

const StatePlayList = props => {
    const { onButtonClick, isOpenList, tracks, setTrack, playTrack } = props;

    function handleClick(track) {
        Player.getPositonSelectTrack(track, tracks);
        setTrack(track);
        Player.select(track.id);
       
    };

    return ( 

        <div className={isOpenList ? 'state state-playlist state-playlist-active' : 'state state-playlist'}>
            <div className="panel panel_top panel_bg" onClick={onButtonClick}>
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

export default StatePlayList;
