import styled from 'styled-components';
import { ReactComponent as Remove } from '../assets/remove.svg';
import useTodoContext from '../hooks/useTodoContext';

const TodoItem = ({ item }) => {
    const { id, content, done } = item;
    const { deleteItem, toggleItem } = useTodoContext();

    return (
        <Item>
            <ItemContentBox
                onClick={() => {
                    toggleItem(id);
                }}
            >
                <RadioButton done={done}></RadioButton>
                <ItemContent>{content}</ItemContent>
            </ItemContentBox>
            <StyledRemove onClick={() => deleteItem(id)} />
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
