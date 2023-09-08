import React, { useEffect, useState } from "react";
import axios from "axios";
import { getAllPosts } from "../../assets/service";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

const Employee = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get(getAllPosts)
      .then((res) => {
        console.log(res);
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const postList = posts.length ? (
    posts.map((post) => {
      return (
        <p key={post.id}>
          Title {post.id}: <Link to={'/employee/' + post.id}> {post.title}</Link>
        </p>
      );
    })
  ) : (
    <ClipLoader
      color="pink"
      loading={true}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
  return <>{postList}</>;
};

export default Employee;
