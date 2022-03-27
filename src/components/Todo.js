import styled from 'styled-components';
import Item from './Item';

const Todo = ({ isDoneList, savedList, setSavedList }) => {
  const filteredList = savedList?.filter((item) => item.isDone === isDoneList);

  const handleTextClick = (e) => {
    const newList = (filteredList) =>
      filteredList.map((item) =>
        item.id === parseInt(e.target.id)
          ? { ...item, isDone: !item.isDone }
          : item
      );

    setSavedList(newList);
  };

  const handleDeleteBtnClick = (e) => {
    const newList = (filteredList) =>
      filteredList.filter((todo) => todo.id !== parseInt(e.target.id));

    setSavedList(newList);
  };

  return (
    <>
      <ListTitle>
        {isDoneList
          ? `Done: ${filteredList?.length}`
          : `To do: ${filteredList?.length}`}
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

const ListTitle = styled.div``;

const List = styled.section``;
