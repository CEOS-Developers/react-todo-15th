import styled from 'styled-components';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { runToast } from './toast/Toast';

const InputTodo = ({ list, setList }) => {
    const [form, setForm] = useState('');
    const handleChange = (e) => {
        setForm(e.target.value);
    };

    const handleInput = () => {
        const createItem = () => {
            setList([
                ...list,
                {
                    id: uuidv4(),
                    content: form,
                    done: false,
                },
            ]);
        };

        form // 입력한 값이 있고,
            ? !list.find((item) => item.content === form) //중복되는 값이 없을 때
                ? createItem()
                : runToast('동일한 내용으론 작성할 수 없어요!')
            : runToast('할 일을 입력해주세요!');

        //입력창 초기화
        setForm('');
    };

    return (
        <>
            <InputBox>
                <InputText id="input-form" onSubmit={handleInput} value={form} onChange={handleChange} placeholder="할 일을 입력해 주세요." />
                <InputButton id="input-button" type="submit" onClick={handleInput}>
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
