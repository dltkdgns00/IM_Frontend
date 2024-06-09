import { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import FloatingActionButton from "../../hooks/FloatingActionButton";
import HeaderBar from "./HeaderBar/HeaderBar";
import ProtectedRoute from "../../components/ProtectedRoute";
import OpenSpace from "./OpenSpace/OpenSpace";
import TeamSpace from "./TeamSpace/TeamSpace";

import styles from './Community.module.css';

const Community = () =>
{
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const handleFabClick = () =>
  {
    if (activeIndex === 0)
    {
      navigate('/newpost/openspace');
    } else if (activeIndex === 1)
    {
      navigate('/newpost/teamspace');
    }
  };

  return (
    <div>
      <HeaderBar onIndexChange={setActiveIndex} />
      <div className={styles.Community}>
        <Routes>
          <Route path="/openspace" element={<ProtectedRoute element={<OpenSpace />} />} />
          <Route path="/teamspace" element={<ProtectedRoute element={<TeamSpace />} />} />
        </Routes>
      </div>
      <FloatingActionButton onClick={handleFabClick} />
    </div>
  );
}

export default Community;
