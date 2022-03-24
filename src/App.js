import TodoList from './components/TodoList';
import FinishedList from './components/FinishedList';
import InputForm from './components/InputForm';
import { Container } from './components/Container';
import { useState } from 'react';
import todoData from './data.json';

function App() {
  const [todoList, setTodoList] = useState(todoData);
  const [finishedList, setFinishedList] = useState([]);

  const handleForm = (textElement) => {
    setTodoList([...todoList, { data: textElement }]);
  };

  return (
    <Container>
      <TodoList todoList={todoList} />
      <FinishedList finishedList={finishedList} />
      <InputForm handleForm={handleForm} />
    </Container>
  );
}

export default App;
