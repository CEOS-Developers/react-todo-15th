import { useContext } from 'react';
import { TodoContext } from '../context/todoProvider';
import TodoItem from './TodoItem';
import { List } from '../styles/Container';

const TodoItemList = ({ done }) => {
    const { list, setList } = useContext(TodoContext);
    const sectionList = list.filter((item) => item.done === done);

    /* const toggleTodo = useCallback(
        (id) => {
            setList(list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
        },
        [list]
    ); */

    return (
        <>
            <h4>
                {done ? 'DONE' : 'TO DO'} <span style={{ color: '#8989bb' }}>({sectionList.length})</span>
            </h4>
            <List>
                {sectionList.map((item) => (
                    <TodoItem item={item} key={item.id} />
                ))}
            </List>
        </>
    );
};

export default TodoItemList;
