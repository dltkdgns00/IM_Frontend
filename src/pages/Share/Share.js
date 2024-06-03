import { getCookie } from '../../utils/cookies';
import QRCode from 'qrcode.react';


const Share = () =>
{
  const memberCookie = getCookie('memberCookie');
  const decodedMemberCookie = decodeURIComponent(memberCookie);
  const userData = JSON.parse(decodedMemberCookie);
  console.log(userData);

  const url = userData.url;

  return (
    <div>
      {url && <QRCode value={url} />}
    </div>
  );
}

export default Share;