import { Router, Routes, Route } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Home from "../Home/Home";
import Wallet from "../Wallet/Wallet";
import OpenSpace from "../OpenSpace/OpenSpace";
import Info from "../Info/Info";

const Main = () =>
{
  return (
    <Router>
      <div>
        <NavBar />
        <div style={{ paddingBottom: '60px' }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/openspace" element={<OpenSpace />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default Main;