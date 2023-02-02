import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Dictaphone from "./Dictaphone";

export const Upload = () => {
  const [productImg, setProductImg] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  let navigate = useNavigate();

  const TransformFile = (file) => {
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setProductImg(reader.result);
      };
    } else {
      setProductImg("");
    }
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    // console.log(file);
    TransformFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("hello");
    try {
      const response = await axios.post("http://localhost:3000/report", {
        image: productImg,
        title: title,
        desc: desc,
      });
      if (response.status === 200) {
        navigate("/upload");
      }
      console.log(response);
    } catch (err) {
      console.log(err);
    }

    // await fetch("http://localhost:3000/upload", {
    //   method: "POST",
    //   headers: { "Content-Type": "multipart/form-data" },
    //   body: { Name: "Hello" },
    // });
  };
  return (
    <div>
      <h3>Upload</h3>
      <Dictaphone />
      <form action="" onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="*"
          onChange={handleImageUpload}
        />
        <input
          placeholder="enter title"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <input
          placeholder="enter desc"
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <input type="submit" value="Submit" />
      </form>
      <img src={productImg} alt="" width={100} height={100} />
    </div>
  );
};
