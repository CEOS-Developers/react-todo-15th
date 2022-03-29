import { useContext } from 'react';
import { TodoContext } from '../context/todoProvider';
import TodoItem from './TodoItem';
import { List } from '../styles/Container';

const TodoItemList = ({ done }) => {
    const { list, setList } = useContext(TodoContext);
    /* // list 상태에 변화가 있을때마다 로컬스토리지와 동기화
    useEffect(() => syncLocalStorage(list), [list]);

    const toggleTodo = useCallback(
        (id) => {
            setList(list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
        },
        [list]
    );

    const removeTodo = useCallback(
        (id) => {
            setList(list.filter((item) => item.id !== id));
            runToast('삭제되었어요!');
        },
        [list]
    ); */

    const sectionList = list.filter((item) => item.done === done);

    return (
        <>
            <h4>
                {done ? 'DONE' : 'TO DO'} <span style={{ color: '#8989bb' }}>({sectionList.length})</span>
            </h4>
            <List>
                {sectionList.map((item) => (
                    <TodoItem done={done} item={item} key={item.id} />
                ))}
            </List>
        </>
    );
};

export default TodoItemList;
