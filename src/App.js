import React from 'react';
import './App.css';
import { LocationSearch } from './components/LocationSearch';
import { HomePage } from './pages/HomePage'
import { LocationPage } from './pages/LocationPage'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'

function App() {
  return(
    <BrowserRouter>
    <meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":city" element={<LocationPage />} />
      </Routes>
	  </BrowserRouter>
  );
}

export default App;
