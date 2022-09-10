import { useEffect, useState } from "react";
import styled from "styled-components";
export default function WithtHistory({ history }) {
  let depositValue = 0;
  let withdrawValue = 0;
  let totalValue;
  const [isOwing, setIsOwing] = useState(false);

  const depositList = history
    .filter((value) => value.type === "deposit")
    .map((value) => value.value);
  const withdrawList = history
    .filter((value) => value.type === "withdraw")
    .map((value) => value.value);

  for (let i = 0; i < depositList.length; i++) {
    depositValue += Number(depositList[i]);
  }

  for (let i = 0; i < withdrawList.length; i++) {
    withdrawValue += Number(withdrawList[i]);
  }

  totalValue = depositValue - withdrawValue;
  
  useEffect(() => {
    if (totalValue < 0) {
      setIsOwing(true);
    }
  }, [history]);
  return (
    <>
      {history.map((registration) => (
        <span>
          <div>
            <h2>{registration.date}</h2>
            <h3>{registration.description}</h3>
          </div>
          <ColorRegistration typeColor={registration.type}>
            <h4>R${registration.value}</h4>
          </ColorRegistration>
        </span>
      ))}
      <span>
        <h5>SALDO</h5>
        <ColorTotalValue isOwing={isOwing}>
          <h6>R$ {totalValue}</h6>
        </ColorTotalValue>
      </span>
    </>
  );
}

const ColorRegistration = styled.div`
  h4 {
    color: ${(props) => (props.typeColor === "withdraw" ? "#c70000" : "#03AC00")};
  }
`;

const ColorTotalValue = styled.div`
  h6 {
    color: ${(props) => (props.isOwing ? "#c70000" : "#03AC00")};
  }
`;
