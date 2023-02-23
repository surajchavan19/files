import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Images } from "./pages/Images";
import { Upload } from "./pages/Upload";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Home } from "./pages/Home";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dictaphone from "./pages/Dictaphone";
import { Finger } from "./pages/Finger";
import Blog from "./pages/Blog";
import { Jobs } from "./pages/Jobs";
import { Resume } from "./pages/Resume";
import { Schemes } from "./pages/Schemes";
import { Maps } from "./pages/Maps";
import Training from "./pages/Training";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/dict" element={<Dictaphone />} />
          <Route path="/images" element={<Images />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/finger" element={<Finger />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/schemes" element={<Schemes />} />
          <Route path="/maps" element={<Maps />} />

          <Route path="/training" element={<Training />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
