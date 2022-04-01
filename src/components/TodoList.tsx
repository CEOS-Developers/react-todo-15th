import styled from 'styled-components';
import Item from './Item';
import { ILists } from './Interface';

const TodoList = ({ isDoneList, savedList, setSavedList }: ILists) => {
  const filteredList = savedList?.filter((item) => item.isDone === isDoneList);

  const handleTextClick = (id: string) => {
    setSavedList((filteredList) =>
      filteredList.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const handleDeleteBtnClick = (button) => {
    const newList = (filteredList) =>
      filteredList.filter((todo) => todo.id !== button.id);

    setSavedList(newList);
  };

  return (
    <>
      <ListTitle>
        {isDoneList
          ? `Done: ${filteredList?.length}개`
          : `To do: ${filteredList?.length}개`}
      </ListTitle>
      <List>
        {filteredList?.map(({ id, text, isDone }) => (
          <Item
            key={id}
            id={id}
            text={text}
            isDoneList={isDone}
            handleTextClick={handleTextClick}
            handleDeleteBtnClick={handleDeleteBtnClick}
          />
        ))}
      </List>
    </>
  );
};
export default TodoList;

const ListTitle = styled.h2`
  font-size: 14px;
  margin: 14% 0% 7% 3%;
`;

const List = styled.section``;
