import styled from "styled-components";

const HistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: #ffffff;
  width: 90%;
  border-radius: 5px;

  h1 {
    color: #868686;
    text-align: center;
    font-size: 3vh;
    padding: 60% 0;
  }

  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 2vh 3vw;
  }

  div {
    display: flex;
  }

  h2 {
    color: #c6c6c6;
    margin-right: 10px;
  }

  h5 {
    font-weight: bold;
  }
`;

export default HistoryBox;
