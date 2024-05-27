import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './App.module.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './pages/Login/Login';
import SignUp from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';
import OpenSpace from './pages/OpenSpace/OpenSpace';
import Info from './pages/Info/Info';
import NavBar from './pages/NavBar/NavBar';

const App = () =>
{
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="*" element={<Layout />} />
      </Routes>
    </Router>
  );
}

const Layout = () =>
{
  return (
    <div>
      <NavBar />
      <Main />
    </div>
  );

}

const Main = () =>
{
  return (
    <div style={{ paddingBottom: '60px' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/openspace" element={<OpenSpace />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
}

export default App;
