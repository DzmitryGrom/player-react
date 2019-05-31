import { SET_TRACK } from '../../../core/store/constans';

export default function playTrack(state = {}, action) {
    if (action.type === SET_TRACK) {
        return { ...action.payload }

    }
    return state;
}