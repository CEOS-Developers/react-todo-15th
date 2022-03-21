import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 600px;

  /* display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch; */
  display: grid;
  grid-template-rows: 1fr 1fr 50px;

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
  border-radius: 20px;

  /* @media screen and (max-width: 600px) {
    width: 280px;
    height: 480px;
  } */
`;
