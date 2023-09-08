import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Employee from "./components/Employee/Employee";
import Post from "./components/Post/Post";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      {/* react-router-dom  v5
      <Route path="/" component={Home} /> */}

      {/* react-router-dom v6 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/employee/:post_id" element={<Post />} />
      </Routes>

      {/* <Footer /> */}
    </BrowserRouter>
  );
};

export default Router;
