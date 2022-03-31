import { createContext, FC } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { TodoItemContext } from '../Interface';

export const TodoContext = createContext<TodoItemContext>({
    list: [],
    setList: () => {},
});

// https://felixgerschau.com/react-typescript-context/ : react.FC (함수형 컴포넌트)
const TodoProvider: FC = ({ children }) => {
    const { list, setList } = useLocalStorage('item', []);

    return <TodoContext.Provider value={{ list, setList }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
