import { SET_LOADİNG, CLEAR_LOADİNG } from "../types/appTypes";


const initialState = {
    loading: false,
}

const appReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_LOADİNG:
            return { ...state, loading:true }
        case CLEAR_LOADİNG:
            return { ...state, loading:false }

        default:
            return state;
    }
}

export default appReducer;