export default function selectTrack(state = [], action) {
    if(action.type === 'PLAY_TRACK_ID') {
        return [action.payload]

    }
    return state;
}