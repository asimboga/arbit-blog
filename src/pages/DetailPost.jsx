import React, { useEffect } from "react";
import { useParams, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPost } from "../redux/thunk/postThunk";
import axios from "axios";
import {
  toastSuccessNotify,
  toastErrorNotify,
} from "../components/ToastNotify";

const DetailPost = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { id } = useParams();
  const { postList } = useSelector((state) => state.post);
  const post = postList.find((post) => post.id === parseInt(id));

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const handleEditPost = (postId) => {
    navigate(`/edit-post/${postId}`);
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        toastSuccessNotify("Deleted successfully!");
        console.log("Post deleted successfully", response);
      })
      .catch((error) => {
        toastErrorNotify("mission failed!");
        console.error("An error occurred while deleting the post", error);
      });
    navigate("/");
  };

  function redirectToNavLink() {
    document.getElementById("navlink").click();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {post ? (
        <div className="max-w-3xl mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
          <div className="">
            <div className="flex justify-between items-center">
              <div className="flex justify-center items-center">
                <NavLink
                  to="/"
                  className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-full inline-flex items-center"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-3 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                    />
                  </svg>
                </NavLink>
                <a onClick="redirectToNavLink()" id="navlink" href="/">
                  Posts
                </a>
              </div>
              <button
                className=" flex justify-end bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => navigate("/new-post")}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                New Post
              </button>
            </div>
            <div className="p-8">
              <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
              <p className="text-gray-500">{post.body}</p>
            </div>
            <div className="p-4 flex justify-end">
              <button
                className=" flex justify-end bg-pink-500 text-white mr-4 py-2 px-4 rounded"
                onClick={() => handleDeletePost(post.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                  />
                </svg>
                Delete
              </button>
              <NavLink
              to="`/edit-post/${postId}`"
                className="flex justify-end mr-4 bg-blue-500 text-white py-2 px-4 rounded"
                onClick={() => handleEditPost(post.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                  />
                </svg>
                Update
              </NavLink>
            </div>
          </div>
        </div>
      ) : (
        <p>Post not found</p>
      )}
    </div>
  );
};

export default DetailPost;
