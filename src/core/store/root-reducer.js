import { combineReducers } from 'redux';

import  tracks from '../../features/common/reducers/tracks';
import  playTrack from '../../features/common/reducers/playTrack';

export default combineReducers({
  tracks,
  playTrack
})