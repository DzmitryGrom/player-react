import React from 'react';
import StatePlayItem from '../track-Item/component'

import './index.css'
import '../../commonStyle.css'

const TrackListComponent = ({ handleClick, tracks, playTrack }) => {
  return (
    <div className="playlist">
      {tracks.isReady ? tracks.items.map((tracksItem, index) => (
          <StatePlayItem
            key={tracksItem.id}
            onButtonClick={handleClick.bind(this, tracksItem)}
            {...tracksItem}
            isSelect={playTrack.id === tracksItem.id}
          />)) : 'LOAD'
      }
    </div>
  )
};

export default TrackListComponent;