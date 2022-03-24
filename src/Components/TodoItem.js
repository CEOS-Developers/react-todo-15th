import styled from 'styled-components';
import { ReactComponent as ThreeDot } from '../assets/ThreeDot.svg';

const TodoItem = ({ done, item, toggle }) => {
    return (
        <Item>
            <ItemContentBox onClick={toggle}>
                <RadioButton done={done}></RadioButton>
                <ItemContent>{item.content}</ItemContent>
            </ItemContentBox>
            <StyledThreeDot />
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
    transform: translateY(-1px);
    background-color: ${(props) => (props.done ? '#8989bb' : 'none')};
`;

const ItemContent = styled.div`
    cursor: pointer;
    line-height: 22px;
    width: 250px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

const StyledThreeDot = styled(ThreeDot)`
    padding-right: 10px;
    fill: #d3d3d3;
    &:hover {
        fill: black;
    }
`;
