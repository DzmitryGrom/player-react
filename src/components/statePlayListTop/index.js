import React from 'react'
import StatePlayItem from '../../shared/statePlayItem'
import Player from '../../playerControl'

import './index.css'
import '../../commonStyle.css'

const StatePlayListTop = props => {
    const { isOpenListTop,  onToggleListBottom, tracks, setTrack, playTrack } = props;

    function handleClick(track) {
        Player.getPositonSelectTrack(track, tracks);
        setTrack(track);
        Player.select(track.id);
       
    };

    return ( 
        <div className={"state state-playlist-top" + (isOpenListTop ? ' state-playlist-top-active' : '')}>
           <div className="panel panel_top panel_bg">
                <span id="artists" className="panel-top-nav-link">Artists</span>		
                <span id="songs" className="panel-top-nav-link panel-top-nav-link_active">Songs</span>
            </div>
            <div className='playlist-scroll-top-panel'>
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
        </div>
    )
}

export default StatePlayListTop;
