import React, { PureComponent } from 'react'
import './index.css'

export class StatePlayItem extends PureComponent {
    render(){
        const {trackItem, isSelect} = this.props;
        return(
            <div className={isSelect ? 'playlist-item playlist-item-select' : 'playlist-item'}>
                <div className="pl-side_left">
                    <span className="pl-text_top">{trackItem.title}</span>
                    <span className="pl-text_botton">{trackItem.text}</span>
                </div>
                <div className="pl-side_right">
                    <div className="pl-time-side_right">
                        <span className="pl-item-time">{trackItem.time}</span>
                    </div>
                    <div className="i i_scale"></div>
                </div>
            </div>
        )
    }
}

export default StatePlayItem;