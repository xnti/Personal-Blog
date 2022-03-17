
const INIT_STATE = {
    LightTheme: true,
}

const reducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case 'ACTION_CHANGE_THEME':
            return {...state, LightTheme: !state.LightTheme,}
        //
        default:
            return state;
    }
}

export default reducer;
