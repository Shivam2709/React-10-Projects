import styled from 'styled-components';
import { Button } from './styled';

const Home = ({ toggle }) => {
  return (
    <Container>
        <div>
            <img src="/images/dices.png" alt="" />
        </div>
        
        <div className='content'>
            <h1>Dice Game</h1>
            <Button onClick={ toggle }>Play Now</Button>
        </div>
    </Container>
  )
}

export default Home;

const Container = styled.div`
max-width: 1180px;
display: flex;
margin: 0 auto;
align-items: center;

.content h1 {
    font-size: 96px;
    white-space: nowrap;
}
`;

