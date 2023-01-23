
export const asideReducer = (state, action) => {
    if (action.type === "close-aside") {
        const newState = { ...state, asideOpen: false };
        return newState;
    }

    if (action.type === "open-aside") {
        const newState = { ...state, asideOpen: true };
        return newState;
    }
}
