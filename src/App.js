import logo from './logo.svg';
import React from 'react';
import './App.css';
import { NavBar } from './components/NavBar';
import { LocationSearch } from './components/LocationSearch';
import { HomePage } from './pages/HomePage'
import { LocationPage } from './pages/LocationPage'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path=":city" element={<LocationPage />} />
      </Routes>
	  </BrowserRouter>
  );
}

export default App;
