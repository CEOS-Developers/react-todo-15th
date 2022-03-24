import styled from 'styled-components';

import AllContents from './components/AllContents/index';

function App() {
  return (
    <Container>
      <AllContents />
    </Container>
  );
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px dotted red;
  margin: auto;
  width: 300px;
  padding: 0 10px;
`;

export default App;
