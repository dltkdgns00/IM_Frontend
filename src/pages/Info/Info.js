import { deleteCookie } from "../../utils/cookies";

const Info = () =>
{
  const handleLogout = () =>
  {
    deleteCookie('authToken');
    deleteCookie('memberCookie');
    window.location.href = '/';
  }
  return (
    <div>
      <h1>Info</h1>
      <button onClick={handleLogout}>debug.logout</button>
    </div>
  );
}

export default Info;