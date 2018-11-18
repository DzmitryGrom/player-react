import React, { Component } from 'react';
import './App.css'

import StateCover from './components/stateCover'
import StatePlayList from './components/statePlayList'
import tracksItems from './fixtures'

class App extends Component {
  state = {
    isOpenList: false
  }
  render() {
      const imageUrl = 'http://www.zastavki.com/pictures/640x480/2012/Music_Linkin_Park_Group_034037_29.jpg';
    return (
      <div>
        <div style={{ backgroundImage: `url(${imageUrl})` }}  className="background"/>
        <StateCover isOpenList={this.state.isOpenList} info={imageUrl}/>
        <StatePlayList 
            isOpenList={this.state.isOpenList} 
            onButtonClick={this.handleClick.bind(this)}
            tracksItems={tracksItems}
        />
      </div>
    );
  }
  handleClick = isOpenList => this.setState({ isOpenList: !this.state.isOpenList})
}

export default App;