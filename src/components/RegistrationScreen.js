import Logo from "./Styles/LogoStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrSignInStyle";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

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
  console.log(registrationInfo)
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
            placeholder="Name"
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
      <Button>Cadastrar</Button>
      <RegisterOrSignIn onClick={ChangeScreen}>Já tem uma conta? Entre agora!</RegisterOrSignIn>
    </>
  );
}
