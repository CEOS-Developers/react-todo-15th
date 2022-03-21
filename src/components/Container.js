import styled from 'styled-components';

export const Container = styled.div`
  width: 350px;
  height: 600px;

  display: grid;
  grid-template-rows: minmax(auto, 275px) minmax(auto, 275px) minmax(auto, 50px);

  box-shadow: 0 0 25px rgba(0, 0, 0, 0.25);
  background: white;
  border-radius: 20px;

  /* background: red; */
`;

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  margin-right: 20px;
`;
export const ScrollBox = styled.ul`
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }
`;
