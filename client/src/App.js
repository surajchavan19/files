import { useState } from "react";
import "./App.css";

function App() {
  const [productImg, setProductImg] = useState("");

  console.log(productImg);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    console.log(file);
    TransformFile(file);
  };

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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", productImg.data);
    console.log(formData);
    console.log("sui");
    await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: { "Content-Type": "multipart/form-data" },
      body: { Name: "Hello" },
    });
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
