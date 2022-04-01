import {
  DivDoneList,
  DoneNumStyle,
  ListBtn,
  Unordered,
  SpanStyle,
} from './style';
import { IDoneList, ITodoList } from 'interface';

const Index = ({ list, onToggle, doneNum }: IDoneList) => {
  return (
    <DivDoneList>
      <DoneNumStyle>
        <SpanStyle>DONE ({doneNum})</SpanStyle>
        <span> src/components/doneList.tsx</span>
      </DoneNumStyle>
      <Unordered>
        {list.map((item: ITodoList, index: number) => (
          <div key={index}>
            {item.isDone && (
              <ListBtn onClick={onToggle}>{item.contents}</ListBtn>
            )}
          </div>
        ))}
      </Unordered>
    </DivDoneList>
  );
};

export default Index;
