import styled from "styled-components";
import Logo from "./Styles/LogoStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrSignInStyle";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const navigate = useNavigate();
  function ChangeScreen() {
    navigate("/sign-up");
  }
  return (
    <Login>
      <Logo>MyWallet</Logo>
      <Input>
        <form>
          <input type="email" placeholder="E-mail" name="email" />
          <input type="password" placeholder="Senha" name="password" />
        </form>
      </Input>
      <Button>Entrar</Button>
      <RegisterOrSignIn onClick={ChangeScreen}>Primeira vez? Cadastre-se</RegisterOrSignIn>
    </Login>
  );
}


const Login = styled.div `
margin-top: 20vh;
`
