import TodoItem from './TodoItem';
import { List } from '../styles/Container';
const TodoItemList = ({ done, list, toggle }) => {
    const todoList = list.filter((item) => item.done === done);
    return (
        <List>
            {todoList.map((item) => (
                <TodoItem done={done} item={item} key={item.id} toggle={() => toggle(item.id)} />
            ))}
        </List>
    );
};

export default TodoItemList;
