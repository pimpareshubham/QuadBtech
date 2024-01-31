import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import ShowDetails from './components/ShowDetails';
import NavBar from './components/NavBar';
import './App.css'



function App() {

  function DynamicRouting() {
   

    return (
      
      <Routes>
    
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/show/:id" element={<ShowDetails />}></Route>
        
      </Routes>
    )
  }

  return (
    <div className='app-bg'>
      <Router>
        <NavBar></NavBar>
        <DynamicRouting />
      </Router>
    </div>
  );
}

export default App;
