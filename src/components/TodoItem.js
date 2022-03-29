import styled from 'styled-components';
import { ReactComponent as Remove } from '../assets/remove.svg';

const TodoItem = ({ done, item, toggleTodo, remove }) => {
    return (
        <Item>
            <ItemContentBox onClick={toggleTodo}>
                <RadioButton done={done}></RadioButton>
                <ItemContent>{item.content}</ItemContent>
            </ItemContentBox>
            <StyledRemove onClick={remove} />
        </Item>
    );
};

export default TodoItem;

const Item = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 35px;
`;

const ItemContentBox = styled.div`
    display: flex;
`;

const RadioButton = styled.div`
    width: 16px;
    height: 16px;
    margin-right: 10px;
    border-radius: 50%;
    border: 2px solid #8989bb;
    cursor: pointer;
    background-color: ${(props) => (props.done ? '#8989bb' : 'none')};
`;

const ItemContent = styled.div`
    cursor: pointer;
    line-height: 16px;
    width: 250px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const StyledRemove = styled(Remove)`
    padding-right: 10px;
    fill: #d3d3d3;
    &:hover {
        fill: black;
    }
`;
