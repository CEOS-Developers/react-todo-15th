import { DivInputForm, InputStyle, Rec, Triangle, SpanStyle } from './style';
import { IInputFormProps } from 'interface';
const maxLength: number = 18;

const Index = ({ onSubmit, onChange, contents }: IInputFormProps) => {
  return (
    <div>
      <DivInputForm>
        <form style={{ display: 'flex' }} onSubmit={onSubmit} action="">
          <SpanStyle>
            <Rec>~/</Rec>
            <Triangle />
          </SpanStyle>
          <InputStyle
            maxLength={maxLength}
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

export default Index;
