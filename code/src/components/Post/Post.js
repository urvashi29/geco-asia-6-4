import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getAllPosts } from "../../assets/service";
import ClipLoader from "react-spinners/ClipLoader";
import axios from "axios";

const Post = () => {
  const [post, setPost] = useState(null);

  const params = useParams();
  console.log(params);

  useEffect(() => {
    axios
      .get(getAllPosts + params.post_id)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {post ? (
        post.title
      ) : (
        <ClipLoader
          color="pink"
          loading={true}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      )}
    </>
  );
};

export default Post;
