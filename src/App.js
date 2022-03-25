import React, { useEffect, useState, useCallback } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import { Main, Section } from './styles/Container';
import { getLocalStorage, syncLocalStorage } from './components/TodoState';
import { runToast, ToastComponent } from './components/toast/Toast';
import InputTodo from './components/InputTodo';
import TodoItemList from './components/TodoItemList';

function App() {
    const [list, setList] = useState(getLocalStorage);

    // list 상태 변화할 때마다 로컬스토리지 동기화
    useEffect(() => syncLocalStorage(list), [list]);

    const toggleTodo = useCallback(
        (id) => {
            setList((list) => list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
        },
        [list]
    );

    const removeTodo = useCallback(
        (id) => {
            setList((list) => list.filter((item) => item.id !== id));
            runToast('삭제되었어요!');
        },
        [list]
    );

    return (
        <>
            <GlobalStyle />
            <Main>
                <Section>
                    <h1>투두 리스트</h1>
                    <InputTodo list={list} setList={setList} />
                </Section>
                <Section>
                    <TodoItemList done={false} list={list} setList={setList} toggle={toggleTodo} remove={removeTodo}></TodoItemList>
                </Section>
                <Section>
                    <TodoItemList done={true} list={list} setList={setList} toggle={toggleTodo} remove={removeTodo}></TodoItemList>
                </Section>
                <ToastComponent />
            </Main>
        </>
    );
}

export default App;
