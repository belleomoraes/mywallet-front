import styled from "styled-components";
import Logo from "./Styles/LogoStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrSignInStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function LoginScreen() {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });
  function handleLogin(e) {
    e.preventDefault();
    setLoginInfo({
      ...loginInfo,
      [e.target.name]: e.target.value,
    });
  }

  function sendLoginInfo() {
    const promise = axios.post("http://localhost:5000/", loginInfo);

    promise.then((res) => {
      localStorage.setItem("myTokenInLocalStorage", res.data);
      navigate("/home");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        alert("Preencha todos os campos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }

      if (res.response.status === 404) {
        alert("E-mail ou senha incorretos");
        setLoginInfo({
          email: "",
          password: "",
        });
      }
    });
  }
  function ChangeScreen() {
    navigate("/sign-up");
  }
  return (
    <Login>
      <Logo>MyWallet</Logo>
      <Input>
        <form>
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={loginInfo.email}
            onChange={handleLogin}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={loginInfo.password}
            onChange={handleLogin}
          />
        </form>
      </Input>
      <Button onClick={sendLoginInfo}>Entrar</Button>
      <RegisterOrSignIn onClick={ChangeScreen}>Primeira vez? Cadastre-se</RegisterOrSignIn>
    </Login>
  );
}

const Login = styled.div`
  margin-top: 20vh;
`;
