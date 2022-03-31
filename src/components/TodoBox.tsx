import Clock from './Clock';
import { useCallback, useEffect, useState } from 'react';
import TodoInput from './TodoInput';
import TodoLists from './TodoLists';
import styled from 'styled-components';
import { Todo } from '../interface/Todo';

const Title = styled.h2`
  margin: 0;
  font-weight: normal;
`;

const ListTitle = styled.div`
  padding-left: 1rem;
  margin-top: 0.9rem;
  font-weight: normal;
  font-size: 17px;
`;

//localStorage key설정
const TODOS_KEY = 'todos';

const TodoBox = () => {
  //localStorage에서 todos 가져오기
  const [todos, setTodos] = useState(
    JSON.parse(localStorage.getItem(TODOS_KEY)) || []
  );

  //localStorage에 todos 저장
  useEffect(() => {
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
  }, [todos]);

  // input에 입력된 text로 todo 객체 생성
  const handleTodoInput = useCallback(
    (todoText: string) => {
      const todo: Todo = {
        id: Date.now(),
        text: todoText,
        isCompleted: false,
      };

      // 원래 있던 todo에 새로운 todo 붙이기
      setTodos([...todos, todo]);
    },
    [todos]
  );

  // todo 삭제 function
  const handleTodoDelete = useCallback(
    (id: number) => {
      setTodos(todos.filter((todo: Todo) => todo.id !== id));
    },
    [todos]
  );

  // todo 토글 function
  const handleTodoToggle = useCallback(
    (id: number) => {
      setTodos(
        todos.map((todo: Todo) =>
          todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
        )
      );
    },
    [todos]
  );

  // isCompleted 이 false인 yetTodo 배열 생성
  const yetTodoList = todos.filter((todo: Todo) => todo.isCompleted === false);

  //isCompleted 이 true인 doneTodo 배열 생성
  const doneTodoList = todos.filter((todo: Todo) => todo.isCompleted === true);

  return (
    <div>
      <Clock></Clock>
      <Title className="todo-title">🔫 To Do List</Title>
      <TodoInput handleTodoInput={handleTodoInput} />
      <ListTitle>🔮 To Do ({yetTodoList.length})</ListTitle>
      <TodoLists
        todolist={yetTodoList}
        handleTodoDelete={handleTodoDelete}
        handleTodoToggle={handleTodoToggle}
      />
      <ListTitle> ❤️‍🔥 Done ({doneTodoList.length}) </ListTitle>
      <TodoLists
        todolist={doneTodoList}
        handleTodoDelete={handleTodoDelete}
        handleTodoToggle={handleTodoToggle}
      />
    </div>
  );
};

export default TodoBox;
