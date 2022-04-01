import AllContents from './components/AllContents/index';
import Title from './components/Title';
import { Container, SpanStyle } from './style/style';
function App() {
  const lastLoginTime = new Date().toString().slice(0, -21);

  return (
    <>
      <Container>
        <Title />
        <SpanStyle>Last login: {lastLoginTime}</SpanStyle>
        <AllContents />
      </Container>
    </>
  );
}

export default App;
