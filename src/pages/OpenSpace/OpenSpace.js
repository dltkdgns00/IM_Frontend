import FloatingActionButton from "../../hooks/FloatingActionButton";

import { useNavigate } from 'react-router-dom';

const OpenSpace = () =>
{
  const navigate = useNavigate();

  const handleFabClick = () =>
  {
    navigate('/newpost');
  };

  return (
    <div>
      <h1>Open Space</h1>
      <FloatingActionButton onClick={handleFabClick} />
    </div>
  );
}

export default OpenSpace;