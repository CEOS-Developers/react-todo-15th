import TodoList from './components/TodoList';
import FinishedList from './components/FinishedList';
import InputForm from './components/InputForm';
import { Container } from './components/Container';

import todoData from './data.json';

import useTodo from './hooks/useTodo';
import useFinished from './hooks/useFinished';

function App() {
  const { todoList, addTodoList, deleteTodoList } = useTodo(todoData);
  const { finishedList, addFinishedList, deleteFinishedList } = useFinished([]);

  return (
    <Container>
      <TodoList
        todoList={todoList}
        deleteTodoList={deleteTodoList}
        addFinishedList={addFinishedList}
      />
      <FinishedList
        finishedList={finishedList}
        deleteFinishedList={deleteFinishedList}
        addTodoList={addTodoList}
      />
      <InputForm handleSubmit={addTodoList} />
    </Container>
  );
}

export default App;
