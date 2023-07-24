import React from 'react';
import Navbar from './Components/Navbar';
import * from './Pages';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App(){
    return(
    <div className="App">
        <Router>
            <Navbar/>
            <Routes>
                <Route path='/' index ></Route>
            </Routes>
        </Router>
        
    </div>);
};

export default App;
