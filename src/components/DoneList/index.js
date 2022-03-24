import styled from 'styled-components';
import PropTypes from 'prop-types';
import { DivDoneList, DoneNumStyle, ListBtn, Unordered } from './style';

const Index = ({ list, onToggle, doneNum }) => {
  return (
    <DivDoneList>
      <DoneNumStyle>
        <span style={{ color: '#BF9053', fontWeight: 'bold' }}>
          DONE ({doneNum})
        </span>
        <span> src/components/doneList.js</span>
      </DoneNumStyle>
      <Unordered>
        {list.map((item, index) => (
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
