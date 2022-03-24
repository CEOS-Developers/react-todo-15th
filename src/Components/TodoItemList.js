import TodoItem from './TodoItem';
import { List } from '../styles/Container';
const TodoItemList = ({ list }) => {
    return (
        <List>
            {list.map((item) => (
                <TodoItem item={item} key={item.id} />
            ))}
        </List>
    );
};

export default TodoItemList;
