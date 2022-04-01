import {
  DeleteBtn,
  DivYetList,
  ListBtn,
  RowDivInYetList,
  Unordered,
  YetNumStyle,
} from './style';

import { ITodoList, IYetListProps } from 'interface';

const Index = ({ list, yetNum, onToggle, onDelete }: IYetListProps) => {
  return (
    <DivYetList>
      <YetNumStyle>
        <span style={{ color: '#BF9053', fontWeight: 'bold' }}>
          TO DO ({yetNum})
        </span>
        <span> src/components/yetList.tsx</span>
      </YetNumStyle>
      <Unordered>
        {list.map((item: ITodoList, index: number) => (
          <RowDivInYetList key={index}>
            {!item.isDone && (
              <>
                <ListBtn onClick={onToggle}>{item.contents}</ListBtn>
                <DeleteBtn onClick={onDelete}>[삭제]</DeleteBtn>
              </>
            )}
          </RowDivInYetList>
        ))}
      </Unordered>
    </DivYetList>
  );
};

export default Index;
