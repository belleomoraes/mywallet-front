import Head from "./Styles/HeadStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
export default function DepositScreen() {
  const navigate = useNavigate();
  const [depositInfo, setDepositInfo] = useState({
    value: "",
    description: "",
  });

  function handleDeposit(e) {
    e.preventDefault();
    setDepositInfo({
      ...depositInfo,
      [e.target.name]: e.target.value,
    });
    
  }
  function AddDeposit() {
    const tokenLocal = localStorage.getItem("myTokenInLocalStorage");
    const config = {
      headers: {
        Authorization: `Bearer ${tokenLocal}`,
      },
    };
    const promise = axios.post(
      "http://localhost:5000/deposit", depositInfo,
      config
    );
    promise.then((res) => {
      setDepositInfo(res.data);
    });
    navigate("/home");
  }
  return (
    <>
      <Head>
        <div>Nova Entrada</div>
      </Head>
      <Input>
        <form>
          <input
            type="text"
            placeholder="Valor"
            name="value"
            value={depositInfo.value}
            onChange={handleDeposit}
          />
          <input
            type="text"
            placeholder="Descrição"
            name="description"
            value={depositInfo.description}
            onChange={handleDeposit}
          />
        </form>
      </Input>
      <Button onClick={AddDeposit}>Salvar entrada</Button>
    </>
  );
}
