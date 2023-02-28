import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import loadingGif from "../assets/loading.gif"
import { getPost } from "../redux/thunk/postThunk";

const NewPost = () => {
  const dispatch = useDispatch()
  const { postList } = useSelector((state) => state.post)
  const {loading} = useSelector((state)=>state.app)

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);



  return (
    <>
      {loading && (<img src={loadingGif} alt="loading_gif"/>)}
      {!loading && (
        postList.map((post) => (
          <div key={post.id} className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
            <div className="md:flex">
              <div className="p-8">
                <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{post.title}</a>
                <p className="mt-2 text-gray-500">{post.body}</p>
              </div>
            </div>
          </div>
        )))}

    </>


  )
}

export default NewPost;