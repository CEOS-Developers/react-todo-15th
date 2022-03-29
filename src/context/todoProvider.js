import { createContext } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
export const TodoContext = createContext({
    list: [],
    setList: () => {},
});

const TodoProvider = ({ children }) => {
    const [list, setList] = useLocalStorage();

    return <TodoContext.Provider value={{ list, setList }}>{children}</TodoContext.Provider>;
};

export default TodoProvider;
