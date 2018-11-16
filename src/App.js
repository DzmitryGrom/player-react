import React, { Component } from 'react';

import { StateCover } from './components/stateCover'

class App extends Component {
  render() {
      const imageUrl = 'http://www.zastavki.com/pictures/640x480/2012/Music_Linkin_Park_Group_034037_29.jpg';
    return (
      <div className="App">
        <div style={{ backgroundImage: `url(${imageUrl})` }}  className="background"/>
        <StateCover/>
      </div>
    );
  }
}

export default App;
