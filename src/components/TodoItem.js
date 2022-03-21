import styled from 'styled-components';
import { Bin } from '../constants/icons';

const TodoItem = ({ data }) => {
  return (
    <Item>
      {data}
      <Bin />
    </Item>
  );
};
const Item = styled.li`
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

export default TodoItem;
