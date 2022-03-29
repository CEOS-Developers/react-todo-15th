import React, { useContext, useEffect } from 'react';
import { TodoContext } from './context/todoProvider';

import GlobalStyle from './styles/GlobalStyle';
import { Main, Section } from './styles/Container';
import { ToastComponent } from './components/toast/Toast';
import InputTodo from './components/InputTodo';
import TodoItemList from './components/TodoItemList';

function App() {
    // list 상태 변화할 때마다 로컬스토리지 동기화
    const { list, setList } = useContext(TodoContext);
    useEffect(() => {
        console.log(list);
    }, [list]);
    return (
        <>
            <GlobalStyle />
            <Main>
                <Section>
                    <h1>투두 리스트</h1>
                    <InputTodo list={list} setList={setList} />
                </Section>
                <Section>
                    <TodoItemList done={false} list={list} setList={setList}></TodoItemList>
                </Section>
                <Section>
                    <TodoItemList done={true} list={list} setList={setList}></TodoItemList>
                </Section>
                <ToastComponent />
            </Main>
        </>
    );
}

export default App;
