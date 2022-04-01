import {
  DivInputForm,
  InputStyle,
  Rec,
  Triangle,
  SpanStyle,
  flex,
} from './style';
import { IInputFormProps } from 'interface';

const Index = ({ onSubmit, onChange, contents }: IInputFormProps) => {
  const maxLength: number = 18;

  return (
    <div>
      <DivInputForm>
        <form style={flex} onSubmit={onSubmit} action="">
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
