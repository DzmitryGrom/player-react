import { combineReducers } from 'redux';

import  tracks from './tracks';
import  selectTrack from './selectTrack';

export default combineReducers({
    tracks,
    selectTrack
})