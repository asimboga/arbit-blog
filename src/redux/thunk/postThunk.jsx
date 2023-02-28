import { setPostList } from "../actions/postActions";
import { setLoading, clearLoading } from "../actions/appActions";
import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/posts";

export const getPost = () => {
  return async (dispatch) => {
    try {
      dispatch(setLoading());
      const { data } = await axios.get(url);
      dispatch(setPostList(data));
      console.log(data);
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(clearLoading());
    }
  };
};
