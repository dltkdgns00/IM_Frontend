import styles from "./Wallet.module.css"
import CircularCarousel from "../../hooks/CircularCarousel";

const Wallet = () =>
{
  const items = [
    {
      name: "이상훈",
      org: "AnHive",
      tel: "010-2576-9062",
      email: "s20604@naver.com",
    },
    {
      name: "이인호",
      org: "TBD",
      tel: "010-2576-9062",
      email: "s20604@naver.com",
    },
    {
      name: "이승규",
      org: "NeoDataWorld",
      tel: "010-2576-9062",
      email: "s20604@naver.com",
    },
    {
      name: "신윤찬",
      org: "NeoDataWorld",
      tel: "010-2576-9062",
      email: "s20604@naver.com",
    },
  ];

  return (
    <div className={styles.wallet}>
      <div className={styles.outerCircle}>
        <div className={styles.innerCircle}>

        </div>
      </div>
      <CircularCarousel
        items={items}
      />
    </div>
  );
}

export default Wallet;