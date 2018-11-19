import React, { Component } from 'react';
import './App.css'

import StateCover from './components/stateCover'
import StatePlayList from './components/statePlayList'

class App extends Component {
    state = {
        isOpenList: false,
        tracksItems: null
    };

    componentDidMount() {
        fetch(`https://api.soundcloud.com/tracks?client_id=7172aa9d8184ed052cf6148b4d6b8ae6&limit=10&genres=rock&offset=663`)
            .then(response => response.json())
            .then(json => {
                this.setState({ tracksItems: json })
            })

    }

    render() {
        const imageUrl = 'http://www.zastavki.com/pictures/640x480/2012/Music_Linkin_Park_Group_034037_29.jpg';
        return (
            <div>
                <div style={{ backgroundImage: `url(${imageUrl})` }} className="background"/>
                <StateCover isOpenList={this.state.isOpenList} info={imageUrl}/>
                <StatePlayList
                    isOpenList={this.state.isOpenList}
                    onButtonClick={this.handleClick.bind(this)}
                    tracksItems={this.state.tracksItems}
                />
            </div>
        );
    }

    handleClick = isOpenList => this.setState({ isOpenList: !this.state.isOpenList })
}

export default App;
