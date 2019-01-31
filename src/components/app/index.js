import React, { PureComponent } from 'react';
import axios from 'axios';

import StateCover from '../../containers/Cover'
import StatePlayList from '../../containers/StatePlayList'

class App extends PureComponent {
    state = {
        isOpenList: false
    };

    componentWillMount() {
        const { setTracks } = this.props
        axios.get(`https://api.soundcloud.com/tracks?client_id=7172aa9d8184ed052cf6148b4d6b8ae6&genres=dnb&offset=1000`)
            .then(responce => {
                setTracks(responce.data)
            })
    }

    handleClick = isOpenList => this.setState({ isOpenList: !this.state.isOpenList })

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
}

export default App;
