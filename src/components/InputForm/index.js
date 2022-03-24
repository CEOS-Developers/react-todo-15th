import { DivInputForm } from './style';

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

export default Index;
