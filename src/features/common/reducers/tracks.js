import { SET_TRACKS } from '../../../core/store/constans';

const initialState = {
    items: null,
    isReady: false
}

export default function tracks(state = initialState, action) {
    if (action.type === SET_TRACKS) {
        return { ...state, items: action.payload, isReady: true }

    }
    return state;
}