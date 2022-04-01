import styled, { css } from 'styled-components';
import { COLORS } from '../constants/COLORS';
import { IIsDoneList } from '../types/types';

const Item = ({
  id,
  text,
  isDoneList,
  handleTextClick,
  handleDeleteBtnClick,
}) => {
  return (
    <ItemWrapper key={id}>
      <ItemText id={id} isDoneList={isDoneList} onClick={handleTextClick}>
        {text}
      </ItemText>
      <DeleteBtn
        src={`${process.env.PUBLIC_URL}/img/bin.png`}
        id={id}
        onClick={handleDeleteBtnClick}
      />
    </ItemWrapper>
  );
};

const ItemWrapper = styled.div`
  width: 90%;
  margin: 12px;

  display: flex;
  align-items: center;
`;

const ItemText = styled.span<IIsDoneList>`
  ${({ isDoneList }) =>
    isDoneList &&
    css`
      color: ${COLORS.lightgrey};
      text-decoration: line-through;
    `}

  cursor: pointer;
`;

const DeleteBtn = styled.img`
  width: 16px;
  height: 16px;
  margin-left: 8px;

  cursor: pointer;
`;

export default Item;
