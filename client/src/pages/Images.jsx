import React, { useEffect, useState } from "react";
import axios from "axios";
import Dictaphone from "./Dictaphone";

export const Images = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/upload")
      .then((response) => {
        setPost(response.data);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1>Page</h1>
      <div>
        <Dictaphone />

        {post.map((data) => {
          return <img src={data.image.url} alt="" height={100} width={100} />;
        })}
      </div>
    </div>
  );
};
