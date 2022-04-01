import {
  DivInputForm,
  InputStyle,
  Rec,
  Triangle,
  SpanStyle,
  flex,
} from './style';
import { IInputFormProps } from 'interface';

const Index = ({
  handleFormSubmit,
  handleContentsChange,
  contents,
}: IInputFormProps) => {
  const maxLength: number = 18;

  return (
    <div>
      <DivInputForm>
        <form style={flex} onSubmit={handleFormSubmit} action="">
          <SpanStyle>
            <Rec>~/</Rec>
            <Triangle />
          </SpanStyle>
          <InputStyle
            maxLength={maxLength}
            required
            onChange={handleContentsChange}
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
