import React, { useEffect, useState } from 'react';

import GlobalStyle from './styles/GlobalStyle';
import { Main, Section } from './styles/Container';

import { getLocalStorage, syncLocalStorage } from './components/TodoState';
import InputTodo from './components/InputTodo';
import TodoItemList from './components/TodoItemList';

function App() {
    const [list, setList] = useState(() => getLocalStorage());
    useEffect(() => syncLocalStorage(list), [list]);
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
                    <TodoItemList list={list.filter((item) => item.done === false)} setList={setList}></TodoItemList>
                </Section>
                <Section>
                    <h4>
                        DONE <span id="done-count"></span>
                    </h4>
                    <TodoItemList list={list.filter((item) => item.done === true)} setList={setList}></TodoItemList>
                </Section>
            </Main>
        </>
    );
}

export default App;
