import React from "react";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Articles from "./Pages/Articles";
import Admin from "./Pages/Admin";
import Gallery from "./Pages/Gallery";
import Upload from "./Pages/Upload";
import ConfirmUpload from "./Pages/ConfirmUpload";
import Blog from "./Pages/Blog";
import IRScholarJournal from "./Pages/Journal";
import SignUp from "./Authentication/Signup";
import Login from "./Authentication/Login";
import Undefined from "./Pages/jsx/Undefined";
import RequireAuth from "./Components/RequireAuth";
import PersistLogin from "./Components/PersistLogin";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PersistLogin />}>
          <Route path="/" index element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/about" element={<About />}></Route>
          {/* <Route path="/articles" element={<Articles />}></Route>
          <Route path="/admin" element={<Admin />}></Route> */}
          <Route path="/gallery" element={<Gallery />}></Route>
          {/* <Route path="/blog" element={<Blog />}></Route>
          <Route path="/journal" element={<IRScholarJournal />}></Route> */}
            <Route element={<RequireAuth />}>
              <Route path="/upload" element={<Upload />}></Route>
              <Route path="/confirm-upload" element={<ConfirmUpload />}></Route>
            </Route>
          </Route>
          <Route path="*" element={<Undefined />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
