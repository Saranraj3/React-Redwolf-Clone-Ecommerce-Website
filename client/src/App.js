import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Manga from "./Pages/Manga";
import Comic from "./Pages/Comic";
import GraphicNovel from "./Pages/GraphicNovel";
import Manhwa from "./Pages/Manhwa";
import LightNovel from "./Pages/LightNovel";

function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/manga" element={<Manga />} />
          <Route path="/comic" element={<Comic />} />
          <Route path="/manhwa" element={<Manhwa />} />
          <Route path="/graphic-novel" element={<GraphicNovel />} />
          <Route path="/light-novel" element={<LightNovel />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
