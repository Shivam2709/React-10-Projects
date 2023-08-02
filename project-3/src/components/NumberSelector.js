
import styled from "styled-components";

const NumberSelector = ({
      error, 
      setError, 
      selectNumber, 
      setSelectNumber
}) => {
  const arrNumber = [1, 2, 3, 4, 5, 6];

  const numberSelectorHandler = (number) => {
    setSelectNumber(number)
    setError("");
  }
  

  return (
    <NumberContainer>
      <p className="error">{error}</p>
      <div className="flex">
        {arrNumber.map((number, i) => (
          <Box
            isSelect={number === selectNumber}
            key={i}
            onClick={() => numberSelectorHandler(number) }
          >
            {number}
          </Box>
        ))}
      </div>
      <p>Select Number</p>
    </NumberContainer>
  );
};

export default NumberSelector;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
    .flex {
        display: flex;
        gap: 24px;
    }
    p {
        font-size: 24px;
        font-weight: 700px;
    }
    .error {
      color: red;
    }
`;

const Box = styled.div`
  height: 72px;
  width: 72px;
  border: 1px solid black;
  display: grid;
  place-items: center;
  font-size: 24px;
  font-weight: 700;
  background-color: ${(props) => (props.isSelect ? "black" : "white")};
  color: ${(props) => (!props.isSelect ? "black" : "white")};
`;
