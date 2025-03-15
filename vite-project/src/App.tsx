import React from "react";
import ScrollToTop from "react-scroll-to-top";

// import { Education } from "./component/Education";
import "./style.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./component/Home";
import { Projects } from "./component/Projects";

const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
