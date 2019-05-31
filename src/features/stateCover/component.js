import React from 'react';
import Player from '../../playerControl';
import './index.css';

const StateCoverComponnt = ({ isOpenListBottom, isOpenListTop, playTrack, isPlay,
  isLoopTrack, curTime, curWidth, onPlayPrev, onPlayButton,
  onPlayNext, onTrackLoop, rewindTrack, getTimeline }) => {
  return (
    <div className={(!playTrack.id ? ' disabled' : null)}>
      <div className="background" style={{ backgroundImage: playTrack.id ? `url(${playTrack.user.avatar_url})` : null }}/>
      <div className={"state state-cover" + (isOpenListBottom ? ' state-cover-up' : '') + (isOpenListTop ? ' state-cover-down' : '')}>
        <div className="panel panel_top">
          <span className="panel-side-title">
              <i className="i i_arrow"/><span className="panel-side-tittle-text">Now Playing {playTrack.id ?
            <span className="panel-side-tittle-genre">{playTrack.genre}</span> : null}</span>
          </span>
        </div>
        <div className="track-cover">
          {playTrack.id ?
            <div className="track-cover-author" style={{ backgroundImage: `url(${playTrack.user.avatar_url})` }}/> : null}
        </div>

        <h2 className="track-albom">{playTrack.id ? playTrack.user.username : 'Author name'}</h2>
        <h3 className="track-caption">
          <span className="track-caption-text">{playTrack.id ? playTrack.title : 'Track name'}</span>
        </h3>

        <div id="defaultBar" className="track-bar" onClick={playTrack.id ? rewindTrack : null} ref={getTimeline}>
          <span id="progressBar" style={{ width: `${curWidth}` }} className="track-bar-line">
              <span id="curTime" className="track-bar-value">{curTime}</span>
          </span>
        </div>

        <div className="controller">
          <div className={"controller-btn" + (!Player.curPosition > 0 ? ' disabled' : '')}>
            <i className="i icon-backward" onClick={onPlayPrev}/>
          </div>
          <div className="controller-btn">
            <i className={isPlay ? "i icon-play" : "i icon-pause"} onClick={playTrack.id ? onPlayButton : null}/>
          </div>

          <div className={"controller-btn" + (Player.curPosition + 1 === Player.allTracks ? ' disabled' : '')}>
            <i className="i icon-forward" onClick={onPlayNext}/>
          </div>
          <div className="controller-btn">
            <i className={isLoopTrack ? "i icon-loop icon-loop-active" : "i icon-loop"} onClick={onTrackLoop}/>
          </div>
        </div>

      </div>
    </div>
  );
};

export default StateCoverComponnt;