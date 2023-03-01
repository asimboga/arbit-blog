import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from '../redux/thunk/postThunk';
import { useNavigate } from 'react-router-dom';
import loadingGif from '../assets/loading.gif';

const Posts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { postList } = useSelector((state) => state.post);
  const { loading } = useSelector((state) => state.app);
  const [selectedPostId, setSelectedPostId] = useState(null);

  useEffect(() => {
    dispatch(getPost());
  }, [dispatch]);

  const handlePostClick = (postId) => {
    setSelectedPostId(postId);
    navigate(`/detail-post/${postId}`);
  };

  return (
    <>
      {loading && <img src={loadingGif} alt="loading_gif" />}
      {!loading && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {postList.map((post) => (
              <div
                key={post.id}
                className="col-span-1 m-4 bg-gray"
                onClick={() => handlePostClick(post.id)}
              >
                <div className="max-w-md mx-auto bg-white shadow-md overflow-hidden md:max-w-2xl">
                  <div className="">
                    <div className="p-8 flex flex-col justify-center">
                      <div className="h-32">
                        <a
                          href="#"
                          className="block mt-1 text-lg leading-tight font-medium text-black hover:underline overflow-hidden overflow-ellipsis whitespace-nowrap capitalize"
                        >
                          {post.title}
                        </a>
                        <p className="mt-2 text-gray-500 overflow-hidden overflow-ellipsis whitespace-normal h-24">
                          {post.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Posts;
