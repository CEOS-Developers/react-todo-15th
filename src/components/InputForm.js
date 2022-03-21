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
