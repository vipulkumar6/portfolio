import React from 'react';
import { Route, Routes } from 'react-router-dom';
import SideNavbar from './components/SideNavbar';
import Home from './components/Home';
import { NextUIProvider } from "@nextui-org/react";

import './App.css'
import About from './pages/About';
import AcademicDetails from './pages/Education';
function App() {
  return (
    <NextUIProvider>
      <div className="App">
        <SideNavbar />
        <div className="content-container">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={Home} />
            <Route path="/skills" element={Home} />
            <Route path="/education" element={<AcademicDetails />} />
          </Routes>
        </div>


      </div>

    </NextUIProvider >


  );
}

export default App;
