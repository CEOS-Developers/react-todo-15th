import GlobalStyle from './Styles/GlobalStyle';
import { Main, Section } from './Components/Container';
import InputTodo from './Components/InputTodo';

function App() {
    return (
        <>
            <GlobalStyle />
            <Main>
                <Section>
                    <h1>투두 리스트</h1>
                    <InputTodo />
                </Section>
                <Section>
                    <h4>
                        TO DO <span id="todo-count"></span>
                    </h4>
                </Section>
                <Section>
                    <h4>
                        DONE <span id="done-count"></span>
                    </h4>
                </Section>
            </Main>
        </>
    );
}

export default App;
