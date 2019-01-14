import React, { Component } from 'react';
import { connect } from 'react-redux';
import './index.css'

import StateCover from '../stateCover'
import StatePlayList from '../statePlayList'

class Main extends Component {
    state = {
        isOpenList: false,
    };

    componentDidMount() {
        fetch(`https://api.soundcloud.com/tracks?client_id=7172aa9d8184ed052cf6148b4d6b8ae6&genres=pop&offset=663`)
            .then(response => response.json())
            .then(tracks => {
                this.props.onAddTracks(tracks)
            })

    }

    render() {
        return (
            <div>
                <StateCover isOpenList={this.state.isOpenList}/>
                <StatePlayList
                    isOpenList={this.state.isOpenList}
                    onButtonClick={this.handleClick.bind(this)}
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
