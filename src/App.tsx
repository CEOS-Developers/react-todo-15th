import { COLORS } from './constants/COLORS';
import { GlobalStyle } from './styles/GlobalStyle';
import styled from 'styled-components';
import InputField from './components/InputField';
import ItemList from './components/ItemList';

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header>투두리스트</Header>
        <InputField />
        <ItemList isDoneList={false} />
        <ItemList isDoneList={true} />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.main`
  width: 350px;
  height: 700px;

  border-radius: 16px;
  border: 1px solid ${COLORS.border};
  overflow: hidden;

  background: ${COLORS.background};
`;

const Header = styled.header`
  height: 10%;
  font-size: 28px;
  padding-left: 16px;

  display: flex;
  align-items: center;

  border-bottom: 1px solid ${COLORS.border};
`;

export default App;
