import { DivDoneList, DoneNumStyle, ListBtn, Unordered } from './style';
import { IDoneList, ITodoList } from 'interface';

const Index = ({ list, onToggle, doneNum }: IDoneList) => {
  return (
    <DivDoneList>
      <DoneNumStyle>
        <span style={{ color: '#BF9053', fontWeight: 'bold' }}>
          DONE ({doneNum})
        </span>
        <span> src/components/doneList.js</span>
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
