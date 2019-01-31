import React from 'react'
import './index.css'

const StatePlayItem = props => {
    const { user, duration, title, isSelect } = props;
    const time = new Date();
    time.setTime(duration);

    return (
        <div className={isSelect ? 'playlist-item playlist-item-select' : 'playlist-item'}>
            <div className="pl-side_left">
                <span className="pl-text_top">{user.username}</span>
                <span className="pl-text_botton">{title}</span>
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

export default StatePlayItem;