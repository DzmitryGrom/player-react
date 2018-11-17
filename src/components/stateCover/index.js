import React, { PureComponent } from 'react'
import './index.css'

export class StateCover extends PureComponent {
    render(){
        const { info, isOpenList } = this.props;
        return(
            <div className={isOpenList ? 'state state-cover state-cover-up' : 'state state-cover'}>
                <div className="panel panel_top">
                    <span className="panel-side-title"><i className="i i_arrow"/><span className="panel-side-tittle-text">Now Playing</span></span>
                </div>
                <div className="track">
                    <div className="track-cover" style={{maxWidth: '70%', backgroundImage: `url(${info})`}}/>
                    <div className="track-bar">
                        <a style={{width: '82%'}} className="track-bar-line" href="#"><span className="track-bar-value">2.50</span></a>
                    </div>
                    <h2 className="track-albom">Cannonballs</h2>
                    <h3 className="track-caption">
                        <span className="track-caption-text">Louder </span>
                        -
                        <span className="track-caption-autor"> Lea Michele</span>
                    </h3>
                </div>
                <div className="controller">
                    {/*<a className="controller-btn" href="#">*/}
                    {/*<i className="i i_shufle"/>*/}
                    {/*</a>*/}
                    <a className="controller-btn" href="#">
                        <i className="i i_prev"/>
                    </a>
                    <a className="controller-btn" href="#">
                        <i className="i i_play"/>
                    </a>
                    <a className="controller-btn" href="#">
                        <i className="i i_next"/>
                    </a>
                    {/*<a className="controller-btn" href="#">*/}
                    {/*<i className="i i_repeat"/>*/}
                    {/*</a>*/}
                </div>
            </div>
        )
    }
}

export default StateCover;