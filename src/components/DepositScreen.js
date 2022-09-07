import Head from "./Styles/HeadStyle";
import Input from "./Styles/InputStyle";
import Button from "./Styles/ButtonStyle";
export default function DepositScreen() {
    return (
      <>
        <Head>
          <div>Nova Entrada</div>
        </Head>
        <Input>
        <form>
          <input type="number" placeholder="Valor" name="value" />
          <input type="text" placeholder="Descrição" name="description" />
        </form>
      </Input>
      <Button>Salvar entrada</Button>
      </>
    );
  }