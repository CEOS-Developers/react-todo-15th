import { DivInputForm } from './style';
import PropTypes from 'prop-types';

const Index = ({ onSubmit, onChange, contents }) => {
  return (
    <div>
      <DivInputForm>
        <form onSubmit={onSubmit} action="">
          <input required onChange={onChange} value={contents} type="text" />
          <button>+</button>
        </form>
      </DivInputForm>
    </div>
  );
};

Index.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  contents: PropTypes.string.isRequired,
};

export default Index;
