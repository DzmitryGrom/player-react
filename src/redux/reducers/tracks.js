export default function tracks(state = [], action) {
    if(action.type === 'TRACKS') {
        return [...state, action.payload]

    }
    return state;
}