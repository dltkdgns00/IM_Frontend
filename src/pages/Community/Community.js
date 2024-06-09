import FloatingActionButton from "../../hooks/FloatingActionButton";
import { Routes, Route } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';
import HeaderBar from "./HeaderBar/HeaderBar";
import ProtectedRoute from "../../components/ProtectedRoute";
import OpenSpace from "./OpenSpace/OpenSpace";
import TeamSpace from "./TeamSpace/TeamSpace";

import styles from './Community.module.css';

const Community = () =>
{
  const navigate = useNavigate();

  const handleFabClick = () =>
  {
    navigate('/newpost');
  };

  return (
    <div>
      <HeaderBar />
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