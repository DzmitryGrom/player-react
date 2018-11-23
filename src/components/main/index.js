import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'

import StateCover from '../stateCover'
import StatePlayList from '../statePlayList'
import bg from '../../interface/bg.jpg'
import vinil from '../../interface/vinil.png'
import tracksItems from '../../fixtures'

class Main extends Component {
    state = {
        isOpenList: false,
    };

    componentDidMount() {
        fetch(`https://api.soundcloud.com/tracks?client_id=7172aa9d8184ed052cf6148b4d6b8ae6&limit=10&genres=rock&offset=663`)
            .then(response => response.json())
            .then(tracks => {
                this.props.onAddTracks(tracks)
            })

    }

    render() {
        const imageUrl = vinil;
        return (
            <div>
                <div style={{ backgroundImage: `url(${bg})` }} className="background"/>
                <StateCover isOpenList={this.state.isOpenList} info={imageUrl}/>
                <StatePlayList
                    isOpenList={this.state.isOpenList}
                    onButtonClick={this.handleClick.bind(this)}
                    tracksItems={tracksItems}
                />
            </div>
        );
    }

    handleClick = isOpenList => this.setState({ isOpenList: !this.state.isOpenList })
}

export default connect(
    state => ({
        testStore: state
    }),
    dispatch => ({
        onAddTracks: (tracks) => {
            dispatch({ type: 'TRACKS', payload: tracks })
        }
    })
)(Main);
