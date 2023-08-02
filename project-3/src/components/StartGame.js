import React, { useState } from 'react'
import styled from 'styled-components';
import TotalScore from './TotalScore';
import NumberSelector from './NumberSelector';
import RoleDice from './RoleDice';
import { Button, OutlineButton } from './styled';
import Rules from './Rules';

const StartGame = () => {
  const [score, setScore ] = useState(0);
  const [selectNumber, setSelectNumber] = useState();
  const [currentDice, setCurrentDice ] = useState(1);
  const [error, setError ] = useState("");
  const [showRules, setShowRules] = useState(false)

  const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
    
  };

  const roleDice = () => {
    if(!selectNumber) {
        setError("You have not selected any number");
        return;
    }
    const randomNumber = generateRandomNumber(1, 7);
    setCurrentDice((prev) => randomNumber);

    if(selectNumber === randomNumber ) {
      setScore((prev) => prev + randomNumber);
    } else {
      setScore((prev) => prev - 2);
    }

    setSelectNumber(undefined);
  };

  const resetScore = () => {
    setScore(0);
  }


  return (
    < MainContainer>
        <div className="top-section">
            <TotalScore score={score} />
            <NumberSelector 
              error={error}
              setError={setError}
              selectNumber={selectNumber} 
              setSelectNumber={setSelectNumber} 
            />
        </div>
        <RoleDice currentDice={currentDice} roleDice={roleDice} />
        <div className='btns'>
          <OutlineButton onClick={resetScore}>Reset Score</OutlineButton>
          <Button
            onClick={() => setShowRules(prev => !prev)}
            >{ showRules ? "Hide" : "Show"} Rules</Button>
        </div>
        { showRules && <Rules />}
    </ MainContainer>
  )
}

export default StartGame;

const MainContainer = styled.main`
    padding-top: 70px;
    .top-section {
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
    .btns {
      display: flex;
      margin-top: 40px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 10px;
    }
`;