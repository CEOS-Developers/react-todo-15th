import styled from 'styled-components';
import useInputs from '../hooks/useInput';
import { validateForm } from '../utils/validate';

// type Prop = {
//   handleSubmit: (data: string) => void;
// };

const InputForm = ({
  handleSubmit,
}: {
  handleSubmit: (data: string) => void;
}) => {
  const { form, handleInputChange, resetInput } = useInputs('');

  // any로 한 이유 : button click event와 form enter event를 둘 다
  // 같은 함수에서 처리하고 있기 때문에 e를 or로 정의해야 한다.
  // 그 점이 크게 의미가 없고 다른 곳에서 쓰이지 않기 때문에 그냥 가기로 했다.
  const saveBtnClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (validateForm(form)) {
      handleSubmit(form);
    } else {
      window.alert('공백만 있는 경우 등록이 불가능합니다.');
    }
    resetInput();
  };

  return (
    <Container>
      <Form onSubmit={saveBtnClick}>
        <InputField
          maxLength={30}
          value={form}
          onChange={handleInputChange}
          placeholder="할 일을 입력하세요"
        />
        <Button onClick={saveBtnClick}>확인</Button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  align-self: end;

  justify-content: center;
  align-items: center;

  background: #f4f6f5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: 'row';
  border: 1px solid #dbdbdb;
  border-radius: 20px;
`;
const InputField = styled.input`
  height: 30px;
  width: 240px;
  background: none;
  text-align: center;

  border: none;
`;
const Button = styled.button`
  border: none;
  background: none;

  color: #0066cc;
  text-align: center;
  text-decoration: none;
  font-size: 14px;

  margin-right: 15px;
`;

export default InputForm;
