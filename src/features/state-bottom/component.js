import React from 'react';
import TrackList from '../../shared/track-list';

import './index.css';
import '../../commonStyle.css';


const stateBottomComponent = ({ isOpenListBottom, onToggleListBottom, isOpenListTop }) => {
  return (
    <div className={"state state-playlist-bottom" + (isOpenListBottom ? ' state-playlist-bottom-active' : '') + (isOpenListTop ? ' state-playlist-bottom-disactive' : '')}>
      <div className="panel panel_top panel_bg" onClick={onToggleListBottom}>
        <span className="top-panel-text">Playlist</span>
      </div>
      <TrackList />
    </div>
  )
};

export default stateBottomComponent;