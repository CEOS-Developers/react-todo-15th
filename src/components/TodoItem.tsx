import {
  BsCheckCircleFill,
  BsCheckCircle,
  BsFillPencilFill,
  BsFillTrashFill,
} from 'react-icons/bs';
import styled from 'styled-components';
import { ITodoItemProps, IStyledButtonProps } from '../interface';

const TodoItem = ({
  todo,
  handleIsDoneToggle,
  handleRemoveTodo,
}: ITodoItemProps) => {
  const { id, text, isDone } = todo;
  return (
    <Wrapper>
      <Content>
        {isDone ? (
          <CheckButton onClick={() => handleIsDoneToggle(id)}>
            <BsCheckCircleFill />
          </CheckButton>
        ) : (
          <CheckButton onClick={() => handleIsDoneToggle(id)}>
            <BsCheckCircle />
          </CheckButton>
        )}
        <Text>{text}</Text>
        <StyledButton>
          <BsFillPencilFill />
        </StyledButton>
        <StyledButton
          size="1.1rem"
          onClick={() => {
            handleRemoveTodo(id);
          }}
        >
          <BsFillTrashFill />
        </StyledButton>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 3px 2px 3px 1.5px;
  border-radius: 5px;
  box-shadow: 0.8px 1.5px 3px 0.8px rgba(0, 0, 0, 0.25);
  padding: 0.7rem;

  & + & {
    margin-top: 10px;
  }
`;

const Content = styled.div`
  height: 1.5rem;
  width: 100%;

  display: flex;
  align-items: center;
`;

const CheckButton = styled.button`
  height: 1.5rem;
  width: 2.2rem;
  margin-left: -0.35rem;

  font-size: 1.5rem;

  background: none;
  border: none;
  opacity: 0.65;

  flex: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    color: darkgray;
    cursor: pointer;
  }
`;

const Text = styled.span`
  height: 1.35rem;
  width: 100%;

  margin-left: 0.25rem;
  font-size: 1.1rem;
  font-weight: 500;

  display: block;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const StyledButton = styled.button<IStyledButtonProps>`
  width: 20px;
  height: 20px;
  margin-right: 1.5%;

  font-size: ${({ size }) => size || '1rem'};
  color: #3f464d;

  background: none;
  border: none;
  opacity: 0.3;

  flex: none;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export default TodoItem;
