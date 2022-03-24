import styled from 'styled-components';
import { Bin } from '../constants/icons';

const TodoItem = ({ data, index, deleteFromList, toggleToAnother }) => {
  const handleOnclick = () => {
    deleteFromList(index);
    toggleToAnother(data);
  };

  const delBtnPressed = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      deleteFromList(index);
    }
  };

  return (
    <Container>
      <Item onClick={handleOnclick}>{data}</Item>
      <Bin onClick={delBtnPressed} />
    </Container>
  );
};
const Container = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 30px;
  border-radius: 20px;

  align-items: center;

  padding-left: 14px;
  padding-right: 14px;

  margin-top: 12px;

  background: #f1f3f5;
`;

const Item = styled.span`
  display: flex;
  width: 100%;
`;

export default TodoItem;
