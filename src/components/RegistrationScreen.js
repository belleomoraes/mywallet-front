import Logo from "./Styles/LogoStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrSignInStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegistrationScreen() {
  const navigate = useNavigate();
  const [registrationInfo, setRegistrationInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleRegistration(e) {
    e.preventDefault();
    setRegistrationInfo({
      ...registrationInfo,
      [e.target.name]: e.target.value,
    })
  }
  
  function sendRegistrationInfo() {
    const promise = axios.post(
      "http://localhost:5000/sign-up",
      registrationInfo
    );

    promise.then((res) => {
      navigate("/");
    });

    promise.catch((res) => {
      if (res.response.status === 422) {
        alert("Preencha todos os campos");
      }

      if (res.response.status === 409) {
        alert("Este e-mail já está cadastrado");
        setRegistrationInfo({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      }

      if (res.response.status === 400) {
        alert("A senha não confere");
        setRegistrationInfo({
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        })
      }
    });
  }

  function ChangeScreen() {
    navigate("/");
  }
  return (
    <>
      <Logo>MyWallet</Logo>
      <Input>
        <form>
          <input
            type="name"
            placeholder="Nome"
            name="name"
            value={registrationInfo.name}
            onChange={handleRegistration}
          />
          <input
            type="email"
            placeholder="E-mail"
            name="email"
            value={registrationInfo.email}
            onChange={handleRegistration}
          />
          <input
            type="password"
            placeholder="Senha"
            name="password"
            value={registrationInfo.password}
            onChange={handleRegistration}
          />
          <input
            type="password"
            placeholder="Confirme a senha"
            name="confirmPassword"
            value={registrationInfo.confirmPassword}
            onChange={handleRegistration}
          />
        </form>
      </Input>
      <Button onClick={sendRegistrationInfo}>Cadastrar</Button>
      <RegisterOrSignIn onClick={ChangeScreen}>Já tem uma conta? Entre agora!</RegisterOrSignIn>
    </>
  );
}
