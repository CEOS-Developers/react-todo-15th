import TodoList from './components/TodoList';
import FinishedList from './components/FinishedList';
import InputForm from './components/InputForm';
import { Container } from './components/Container';
import { useState } from 'react';
import todoData from './data.json';
import useTodo from './hooks/useTodo';
import useFinished from './hooks/useFinished';

function App() {
  // const [todoList, setTodoList] = useState(todoData);
  const [todoList, addTodoList, deleteTodoList] = useTodo(todoData);
  const [finishedList, addFinishedList, deleteFinishedList] = useFinished([
    { data: 'test' },
  ]);

  const handleSubmit = (textData) => {
    addTodoList(textData);
  };

  return (
    <Container>
      <TodoList todoList={todoList} deleteTodoList={deleteTodoList} />
      <FinishedList
        finishedList={finishedList}
        deleteFinishedList={deleteFinishedList}
      />
      <InputForm handleSubmit={handleSubmit} />
    </Container>
  );
}

export default App;
