import React from "react";

// import { Education } from "./component/Education";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Home} from "./component/Home";
import {Projects} from "./component/Projects";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route index element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="projects" element={<Projects />} />

      </Routes>
    </BrowserRouter>
  );
};
export default App;
