import {
  DeleteBtn,
  DivYetList,
  ListBtn,
  RowDivInYetList,
  Unordered,
  YetNumStyle,
} from './style';
import PropTypes from 'prop-types';
import { ITodoList } from 'interface';

interface IYetListProps {
  list: [];
  yetNum: number;
  onToggle: () => void;
  onDelete: () => void;
}

const Index = ({ list, yetNum, onToggle, onDelete }: IYetListProps) => {
  return (
    <DivYetList>
      <YetNumStyle>
        <span style={{ color: '#BF9053', fontWeight: 'bold' }}>
          TO DO ({yetNum})
        </span>
        <span> src/components/yetList.js</span>
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

Index.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      contents: PropTypes.string,
      id: PropTypes.number,
      isDone: PropTypes.bool,
    })
  ).isRequired,
  yetNum: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Index;
