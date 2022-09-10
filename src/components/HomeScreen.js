import Head from "./Styles/HeadStyle";
import HistoryBox from "./Styles/HistoryBoxStyle";
import NewRecord from "./Styles/NewRecordStyle";
import WithoutHistory from "./HomeWithoutHistory";
import WithHistory from "./HomeWithHistory";
import { useNavigate } from "react-router-dom";

export default function HomeScreen() {
  const navigate = useNavigate();
  function LogOut() {
    localStorage.removeItem("myTokenInLocalStorage")
    navigate("/");
  }

  function AddDeposit() {
    navigate("/deposit");
  }

  function AddWithdraw() {
    navigate("/withdraw");
  }
  return (
    <>
      <Head>
        <div>Olá, Fulano</div>
        <ion-icon name="log-out-outline" onClick={LogOut}></ion-icon>
      </Head>
      <HistoryBox>
      <WithoutHistory/>
      </HistoryBox>
      <NewRecord>
        <span onClick={AddDeposit}>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h2>Nova entrada</h2>
        </span>
        <span onClick={AddWithdraw}>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h2>Nova saída </h2>
        </span>
      </NewRecord>
    </>
  );
}
