import styled from "styled-components";

const NewRecord = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
  padding: 10px;
  position: fixed;
  bottom: 0;

  span {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    color: #ffffff;
    font-weight: 700;
    border-radius: 5px;
    height: 15vh;
    width: 50vw;
    background-color: #a328d6;
    padding: 0 4%;
    margin: 0 1vh;
  }

  h2 {
    width: 40%;
  }

  ion-icon {
    font-size: 4vh;
  }
`;

export default NewRecord;
