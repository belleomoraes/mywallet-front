import Head from "./Styles/HeadStyle";
import HistoryBox from "./Styles/HistoryBoxStyle";
import NewRecord from "./Styles/NewRecordStyle";
import WithoutHistory from "./HomeWithoutHistory";
import WithHistory from "./HomeWithHistory";

export default function HomeScreen() {
  return (
    <>
      <Head>
        <div>Olá, Fulano</div>
        <ion-icon name="log-out-outline"></ion-icon>
      </Head>
      <HistoryBox>
      <WithoutHistory/>
      </HistoryBox>
      <NewRecord>
        <span>
          <ion-icon name="add-circle-outline"></ion-icon>
          <h2>Nova entrada</h2>
        </span>
        <span>
          <ion-icon name="remove-circle-outline"></ion-icon>
          <h2>Nova saída</h2>
        </span>
      </NewRecord>
    </>
  );
}
