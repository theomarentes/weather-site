import React from 'react';
import './App.css';
import { LocationSearch } from './components/LocationSearch';
import { HomePage } from './pages/HomePage'
import { LocationPage } from './pages/LocationPage'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';

function App() {
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":city" element={<LocationPage />} />
      </Routes>
	  </BrowserRouter>
  );
}

export default App;
