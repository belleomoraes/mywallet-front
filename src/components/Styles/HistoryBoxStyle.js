import styled from "styled-components";

const HistoryBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  background-color: #ffffff;
  width: 90%;
  border-radius: 5px;

  h1 {
    color: #868686;
    width: 60%;
    text-align: center;
    font-size: 3vh;
    padding: 60% 0;
  }

  span {
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 1%;
    margin: 2vh 2vw;
    width: 100%;
  }

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 50%;
  }

  h2 {
    color: #c6c6c6;
  }

  h5 {
    
    font-weight: bold;
  }

  h6 {
    color: #c70000; /* sem divida #03AC00 */
  }
`;

export default HistoryBox;
