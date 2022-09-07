import styled from "styled-components";
import Logo from "./Styles/LogoStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrSignInStyle";

export default function LoginScreen() {
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
      <RegisterOrSignIn>Primeira vez? Cadastre-se</RegisterOrSignIn>
    </Login>
  );
}

const Login = styled.div `
margin-top: 20vh;
`
