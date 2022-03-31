import { useEffect, useCallback, useContext } from "react";
import styled from "styled-components";
import { TodoInputForm, TodoList, DoneList } from "components";
import { TodoContext } from "contexts";
import { ITodoItem } from "interface";

const App = () => {
  const { todoList, doneList } = useContext(TodoContext);

  // save to localStorage
  const _saveLocalStorage = useCallback(
    (type: string, list: Array<ITodoItem>): void => {
      localStorage.setItem(type, JSON.stringify(list));
    },
    [],
  );

  // list가 변할 때마다 localStorage에 list 저장
  useEffect(() => {
    _saveLocalStorage("todoList", todoList);
  }, [todoList, _saveLocalStorage]);
  useEffect(() => {
    _saveLocalStorage("doneList", doneList);
  }, [doneList, _saveLocalStorage]);

  return (
    <Container>
      <Box>
        <TitleContents>
          <TodoTitle>📝 투두리스트</TodoTitle>
        </TitleContents>
        <TodoInputForm />
        <TodoList />
        <DoneList />
      </Box>
    </Container>
  );
};

const TitleContents = styled.section``;
const TodoTitle = styled.h2`
  padding-left: 20px;
`;
const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Box = styled.main`
  width: 350px;
  height: 600px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 1px 1px 30px grey;
`;

export default App;
