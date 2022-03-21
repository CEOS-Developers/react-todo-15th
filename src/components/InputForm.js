import styled from 'styled-components';

const InputForm = () => {
  return (
    <Container>
      <Form>
        <InputField placeholder="할 일을 입력하세요" />
        <Button>확인</Button>
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
`;

const Form = styled.form`
  display: flex;
  flex-direction: 'row';
`;
const InputField = styled.input`
  height: 30px;
  width: 240px;
  text-align: center;

  border-radius: 20px;
  outline: none;

  margin-right: 15px;
`;
const Button = styled.button`
  border: none;
  background: red;
  border-radius: 4px;

  color: #ffffff;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
`;

export default InputForm;
