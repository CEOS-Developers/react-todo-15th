import styled from 'styled-components';
import Item from './Item';

const Todo = ({ isDoneList, savedList, setSavedList }) => {
  const filteredList = savedList?.filter((item) => item.isDone === isDoneList);

  const handleTextClick = (e) => {
    const newList = (filteredList) =>
      filteredList.map((item) =>
        item.id === e.target.id ? { ...item, isDone: !item.isDone } : item
      );

    setSavedList(newList);
  };

  const handleDeleteBtnClick = (e) => {
    const newList = (filteredList) =>
      filteredList.filter((todo) => todo.id !== e.target.id);

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
        {filteredList?.map(({ id, text }) => (
          <Item
            key={id}
            id={id}
            text={text}
            isDoneList={isDoneList}
            handleTextClick={handleTextClick}
            handleDeleteBtnClick={handleDeleteBtnClick}
          />
        ))}
      </List>
    </>
  );
};
export default Todo;

const ListTitle = styled.h2`
  font-size: 14px;
  margin: 14% 0% 7% 3%;
`;

const List = styled.section``;
