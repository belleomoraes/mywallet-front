import Head from "./Styles/HeadStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function DepositScreen() {
  const navigate = useNavigate();
  const [withdrawInfo, setWithdrawInfo] = useState({
    value: "",
    description: "",
  });

  function handleWithdraw(e) {
    e.preventDefault();
    setWithdrawInfo({
      ...withdrawInfo,
      [e.target.name]: e.target.value,
    });
  }
  function AddWithdraw() {
    const tokenLocal = localStorage.getItem("myTokenInLocalStorage");
    const config = {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    };
    const promise = axios.post(
      "http://localhost:5000/withdraw", withdrawInfo,
      config
    );
    promise.then((res) => {
      setWithdrawInfo(res.data);
    });
    navigate("/home");
  }
  
  return (
    <>
      <Head>
        <div>Nova Saída</div>
      </Head>
      <Input>
        <form>
          <input
            type="number"
            placeholder="Valor"
            name="value"
            value={withdrawInfo.value}
            onChange={handleWithdraw}
          />
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            value={withdrawInfo.description}
            onChange={handleWithdraw}
          />
        </form>
      </Input>
      <Button onClick={AddWithdraw}>Salvar saída</Button>
    </>
  );
 
}
