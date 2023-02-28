import React from 'react'
import axios from 'axios';
import { useEffect } from "react";

const NewPost = () => {
  const url =
          'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-02-28&' +
          'sortBy=popularity&' +
          'apiKey=77ebaea0c91c4375908d347b21090c45';

  const getPost = async () => {
    const response = await axios.get(url);
    console.log(response);
  }

  useEffect(() => {
    getPost();
  }, [])
  


  return (
    <div>NewPost</div>
  )
}

export default NewPost;