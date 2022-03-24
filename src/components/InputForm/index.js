import { DivInputForm, InputStyle, Rec, Triangle } from './style';
import PropTypes from 'prop-types';

const Index = ({ onSubmit, onChange, contents }) => {
  return (
    <div>
      <DivInputForm>
        <form style={{ display: 'flex' }} onSubmit={onSubmit} action="">
          <span style={{ display: 'flex', background: 'black' }} name="shape">
            <Rec>~/</Rec>
            <Triangle />
          </span>
          <InputStyle
            maxLength="18"
            required
            onChange={onChange}
            value={contents}
            type="text"
          />
          {/*<button>+</button>*/}
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
