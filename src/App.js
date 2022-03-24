import styled from 'styled-components';

import AllContents from './components/AllContents/index';
import Title from '../src/components/Title';
import { Container } from './style';
function App() {
  const D = new Date().toString().slice(0, -21);

  return (
    <>
      <Container>
        <Title />
        <span style={{ color: 'white', marginBottom: '5px' }}>
          Last login: {D}
        </span>
        <AllContents />
      </Container>
    </>
  );
}

export default App;
