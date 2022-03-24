import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DivDoneList, Unordered } from './style';

const Index = ({ list, onToggle, doneNum }) => {
  return (
    <DivDoneList>
      <div>{doneNum}</div>
      <Unordered>
        {list.map((item, index) => (
          <div key={index}>
            {item.isDone && <button onClick={onToggle}>{item.contents}</button>}
          </div>
        ))}
      </Unordered>
    </DivDoneList>
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
  doneNum: PropTypes.number.isRequired,
  onToggle: PropTypes.func.isRequired,
};

export default Index;
