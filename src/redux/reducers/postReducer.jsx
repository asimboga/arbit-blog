import { SET_POST_LIST, CLEAR_POST_LIST } from "../types/postTypes";


const initialState = {
    postList: [],
}

const postReducer = (state = initialState, { type, payload }) => {
  switch (type) {

  case SET_POST_LIST:
    return { ...state, postList:payload }

  case CLEAR_POST_LIST:
    return initialState.postList

  default:
    return state
  }
}

export default postReducer;
