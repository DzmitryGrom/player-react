import { SET_TRACKS, SET_TRACK } from '../../../core/store/constans';

export const setTracks = objs => ({
    type: SET_TRACKS,
    payload: objs
}); 

export const setTrack = obj => ({
    type: SET_TRACK,
    payload: obj
}); 

