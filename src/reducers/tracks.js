const initialState = {
    items: null,
    isReady: false
}

export default function tracks(state = initialState, action) {
    if (action.type === 'TRACKS') {
        return { ...state, items: action.payload, isReady: true }

    }
    return state;
}