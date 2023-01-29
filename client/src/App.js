import { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [productImg, setProductImg] = useState("");
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
    try {
      const response = await axios.post("http://localhost:3000/upload", {
        image: productImg,
      });

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
    <div className="App">
      <h3>Upload</h3>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="*"
          onChange={handleImageUpload}
        />
        <input type="submit" value="Submit" />
      </form>
      <img src={productImg} alt="" width={100} height={100} />
    </div>
  );
}

export default App;
