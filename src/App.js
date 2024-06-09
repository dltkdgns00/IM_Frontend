import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';

import Signin from './pages/Signin/Signin';
import SignUp from './pages/Signup/Signup';
import Home from './pages/Home/Home';
import Wallet from './pages/Wallet/Wallet';
import Info from './pages/Info/Info';
import NavBar from './pages/NavBar/NavBar';
import Share from './pages/Share/Share';
import NewPost from './pages/Community/NewPost/NewPost';
import Community from './pages/Community/Community';

const App = () =>
{
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/share" element={<ProtectedRoute element={<Share />} />} />
        <Route path="/newpost" element={<ProtectedRoute element={<NewPost />} />} />
        <Route path="*" element={<ProtectedRoute element={<Layout />} />} />
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
        <Route path="/" element={<ProtectedRoute element={<Home />} />} />
        <Route path="/wallet" element={<ProtectedRoute element={<Wallet />} />} />
        <Route path="/community/*" element={<ProtectedRoute element={<Community />} />} />
        <Route path="/info" element={<ProtectedRoute element={<Info />} />} />
      </Routes>
    </div>
  );
}

export default App;
