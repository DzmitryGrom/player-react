export default function playTrack(state = {}, action) {
    if (action.type === 'PLAY_TRACK') {
        return { ...action.payload }

    }
    return state;
}