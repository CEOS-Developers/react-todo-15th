import AllContents from './components/AllContents/index';
import Title from './components/Title';
import { Container } from './style';
function App() {
  const lastLogin = new Date().toString().slice(0, -21);

  return (
    <>
      <Container>
        <Title />
        <span style={{ color: 'white', marginBottom: '5px' }}>
          Last login: {lastLogin}
        </span>
        <AllContents />
      </Container>
    </>
  );
}

export default App;
