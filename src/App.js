import React from 'react';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Articles from './Pages/Articles';
import Upload from './Pages/Upload';
import Blog from './Pages/Blog';
import IRScholar_Journal from './Pages/Journal';


function App(){
    return(
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path='/' index element={<Home/>} ></Route>
                <Route path='/about' element={<About/>} ></Route>
                <Route path='/articles' element={<Articles/>} ></Route>
                <Route path='/upload' element={<Upload/>} ></Route>
                <Route path='/blog' element={<Blog/>} ></Route>
                <Route path='/journal' element={<IRScholar_Journal/>} ></Route>
            </Routes>
        </BrowserRouter>
        
    </div>);
};

export default App;
