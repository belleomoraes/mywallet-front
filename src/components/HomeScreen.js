import Head from "./Styles/HeadStyle";
import HistoryBox from "./Styles/HistoryBoxStyle";
import NewRecord from "./Styles/NewRecordStyle";
import WithoutHistory from "./HomeWithoutHistory";
import WithHistory from "./HomeWithHistory";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import axios from "axios";
import UserContext from "../context/UserContext";

export default function HomeScreen() {
  const tokenLocal = localStorage.getItem("myTokenInLocalStorage");
  const navigate = useNavigate();
  if (!tokenLocal) {
    navigate("/");
  }
  const [history, setHistory] = useState([]);
  const username = localStorage.getItem('username');

  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    };
    const promise = axios.get("http://localhost:5000/home", config);
    promise.then((res) => {
      setHistory(res.data);
    });
  }, []);

  function LogOut() {
    localStorage.removeItem("myTokenInLocalStorage");
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
        <div>Olá, {username}</div>
        <ion-icon name="log-out-outline" onClick={LogOut}></ion-icon>
      </Head>
      <HistoryBox>
        {history.length <= 0 ? <WithoutHistory /> : <WithHistory history={history} />}
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
