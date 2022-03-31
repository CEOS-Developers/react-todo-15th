import styled from 'styled-components';
import useForm from '../hooks/useForm';
import useTodoContext from '../hooks/useTodoContext';

const InputTodo = () => {
    const { addItem } = useTodoContext();
    const { value, onChange, onSubmit } = useForm('', addItem);

    return (
        <>
            <InputBox onSubmit={onSubmit}>
                <InputText id="input-form" value={value} onChange={onChange} placeholder="할 일을 입력해 주세요." />
                <InputButton id="input-button" type="submit">
                    +
                </InputButton>
            </InputBox>
        </>
    );
};

export default InputTodo;

const InputBox = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const InputText = styled.input`
    width: 85%;
    height: 60px;

    border: 0px;
    border-radius: 15px;
    background-color: #f0f0f0;
    padding: 15px;
    box-sizing: border-box;

    &:focus {
        outline: 0;
        transform: scale(1.02);
        transition: all 0.3s ease;
    }
`;

const InputButton = styled.button`
    background: none;
    border: none;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    font-size: 22px;
    cursor: pointer;

    &:hover {
        background-color: #d3d3d3;
        transition: all 0.3s ease;
    }
`;
