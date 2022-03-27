import styled from 'styled-components';
import { ListContainer, ScrollBox } from './Container';
import TodoItem from './TodoItem';
import { TodoItemData } from '../interface';

interface ITodoListProps {
  todoList: TodoItemData[];
  deleteTodoList: (index: number) => void;
  addFinishedList: (data: string) => void;
}

const TodoList = ({
  todoList,
  deleteTodoList,
  addFinishedList,
}: ITodoListProps) => {
  return (
    <ListContainer>
      <Title>할 일</Title>
      <ScrollBox>
        {todoList.map(({ data }, index) => (
          <TodoItem
            key={index}
            data={data}
            index={index}
            deleteFromList={deleteTodoList}
            toggleToAnother={addFinishedList}
          />
        ))}
      </ScrollBox>
    </ListContainer>
  );
};

const Title = styled.h2``;

export default TodoList;
