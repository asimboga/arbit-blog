import { SET_POST_LIST, CLEAR_POST_LIST } from "../types/postTypes";

export const setPostList = (post) => ({
  type: SET_POST_LIST,
  payload : post,
})

export const clearPostList = () => ({
  type: CLEAR_POST_LIST,
})
