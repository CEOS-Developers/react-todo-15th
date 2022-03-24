import React, { useEffect, useState, useCallback } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import { Main, Section } from './styles/Container';
import { getLocalStorage, syncLocalStorage } from './components/TodoState';
import InputTodo from './components/InputTodo';
import TodoItemList from './components/TodoItemList';

function App() {
    const [list, setList] = useState(() => getLocalStorage());

    // list 상태 변화할 때마다 로컬스토리지 동기화
    useEffect(() => syncLocalStorage(list), [list]);

    const toggleTodo = (id) => {
        setList(list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    };

    return (
        <>
            <GlobalStyle />
            <Main>
                <Section>
                    <h1>투두 리스트</h1>
                    <InputTodo list={list} setList={setList} />
                </Section>
                <Section>
                    <h4>
                        TO DO <span id="todo-count"></span>
                    </h4>
                    <TodoItemList done={false} list={list} setList={setList} toggle={toggleTodo}></TodoItemList>
                </Section>
                <Section>
                    <h4>
                        DONE <span id="done-count"></span>
                    </h4>
                    <TodoItemList done={true} list={list} setList={setList} toggle={toggleTodo}></TodoItemList>
                </Section>
            </Main>
        </>
    );
}

export default App;
