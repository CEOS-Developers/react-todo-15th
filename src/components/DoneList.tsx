import { useContext } from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";
import { TodoContext } from "contexts";

const DoneList = () => {
  const { doneList, _addTodoList, _deleteDoneList } = useContext(TodoContext);

  return (
    <TodoContents>
      <h3>DONE ({doneList.length})</h3>
      <ul>
        {doneList.map(({ text }, idx) => (
          <TodoItem
            key={idx}
            type="done"
            todo={text}
            idx={idx}
            deleteCurrentList={_deleteDoneList}
            addToggleList={_addTodoList}
          />
        ))}
      </ul>
    </TodoContents>
  );
};

const TodoContents = styled.section`
  padding: 0 20px;
`;

export default DoneList;
