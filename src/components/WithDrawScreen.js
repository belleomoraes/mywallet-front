import Head from "./Styles/HeadStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
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
            type="text"
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
