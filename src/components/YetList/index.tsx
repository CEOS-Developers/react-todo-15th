import {
  DeleteBtn,
  DivYetList,
  ListBtn,
  RowDivInYetList,
  Unordered,
  YetNumStyle,
  SpanStyle,
} from './style';

import { ITodoList, IYetListProps } from 'interface';

const Index = ({ list, yetNum, onToggle, onDelete }: IYetListProps) => {
  return (
    <DivYetList>
      <YetNumStyle>
        <SpanStyle>TO DO ({yetNum})</SpanStyle>
        <span> src/components/yetList.tsx</span>
      </YetNumStyle>
      <Unordered>
        {list.map((item: ITodoList) => (
          <RowDivInYetList key={item.id}>
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
