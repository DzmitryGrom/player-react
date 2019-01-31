import { combineReducers } from 'redux';

import  tracks from './tracks';
import  playTrack from './playTrack';

export default combineReducers({
    tracks,
    playTrack
})