import React, { PureComponent } from 'react'
import './index.css'

export class StatePlayItem extends PureComponent {
    render(){
        return(
            <div className="playlist-item playlist-item-select">
                <div className="pl-side_left">
                    <span className="pl-text_top">Deep Roots</span>
                    <span className="pl-text_botton">Bad Salad-Uncivilized</span>
                </div>
                <div className="pl-side_right">
                    <div className="pl-time-side_right">
                        <span className="pl-item-time">3.30</span>
                    </div>
                    <div className="i i_scale"></div>
                </div>
            </div>
        )
    }
}

export default StatePlayItem;