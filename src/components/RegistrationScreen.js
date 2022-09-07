import Logo from "./Styles/LogoStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
import RegisterOrSignIn from "./Styles/RegisterOrSignInStyle";
import { useNavigate } from "react-router-dom";

export default function RegistrationScreen() {
  const navigate = useNavigate();
  function ChangeScreen() {
    navigate("/");
  }
  return (
    <>
      <Logo>MyWallet</Logo>
      <Input>
        <form>
        <input type="name" placeholder="Name" name="name" />
          <input type="email" placeholder="E-mail" name="email" />
          <input type="password" placeholder="Senha" name="password" />
          <input type="password" placeholder="Confirme a senha" name="password" />
        </form>
      </Input>
      <Button>Cadastrar</Button>
      <RegisterOrSignIn onClick={ChangeScreen}>Já tem uma conta? Entre agora!</RegisterOrSignIn>
    </>
  );
}