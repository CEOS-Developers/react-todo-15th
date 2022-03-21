import TodoList from './components/TodoList';
import FinishedList from './components/FinishedList';
import InputForm from './components/InputForm';
import { Container } from './components/Container';

function App() {
  return (
    <Container>
      <TodoList />
      <FinishedList />
      <InputForm />
    </Container>
  );
}

export default App;
