import { DivYetList, Unordered } from './style';
import PropTypes from 'prop-types';

const Index = ({ list, yetNum, onToggle, onDelete }) => {
  return (
    <DivYetList>
      <div>{yetNum}</div>
      <Unordered>
        {list.map((item, index) => (
          <div key={index}>
            {!item.isDone && (
              <>
                <button onClick={onToggle}>{item.contents}</button>
                <button onClick={onDelete}>삭제</button>
              </>
            )}
          </div>
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
