import React from 'react'
import './index.css'

export const StatePlayItem = ({ isSelect, trackItem }) => {
    const time = new Date();
    time.setTime(trackItem.duration);
    return (
        <div className={isSelect ? 'playlist-item playlist-item-select' : 'playlist-item'}>
            <div className="pl-side_left">
                <span className="pl-text_top">{trackItem.user.username}</span>
                <span className="pl-text_botton">{trackItem.title}</span>
            </div>
            <div className="pl-side_right">
                <div className="pl-time-side_right">
                    <span className="pl-item-time">{time.getUTCHours() ? time.toUTCString().slice(17, 25) : time.toUTCString().slice(20, 25)}</span>
                </div>
                <div className="i i_scale">
                    <span className="i_scale-bar"></span>
                    <span className="i_scale-bar"></span>
                    <span className="i_scale-bar"></span>
                </div>
            </div>
        </div>
    )
}