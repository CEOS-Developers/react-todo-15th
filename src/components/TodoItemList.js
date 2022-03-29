import TodoItem from './TodoItem';
import { List } from '../styles/Container';
const TodoItemList = ({ done, list, toggleTodo, remove }) => {
    const sectionList = list.filter((item) => item.done === done);
    return (
        <>
            <h4>
                {done ? 'DONE' : 'TO DO'} <span style={{ color: '#8989bb' }}>({sectionList.length})</span>
            </h4>
            <List>
                {sectionList.map((item) => (
                    <TodoItem done={done} item={item} key={item.id} toggleTodo={() => toggleTodo(item.id)} remove={() => remove(item.id)} />
                ))}
            </List>
        </>
    );
};

export default TodoItemList;
