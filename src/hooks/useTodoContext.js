import { useContext } from 'react';
import { TodoContext } from '../context/todoProvider';
import { v4 as uuidv4 } from 'uuid';
import { runToast } from '../components/toast/Toast';

// https://github.com/CEOS-Developers/react-todo-15th/pull/11/files#diff-4fd5b35d6c3fbfd63c97f711bd5fe3408b11551836f6cec1ecfb67a498d2843a
// 김선종 멘트님 코드 많이 참고했습니다..!

const useTodoContext = () => {
    const { list, setList } = useContext(TodoContext);

    const addItem = (value) => {
        const createItem = () => {
            setList([
                ...list,
                {
                    id: uuidv4(),
                    content: value,
                    done: false,
                },
            ]);
        };

        if (value) {
            if (list.find((item) => item.content === value)) {
                runToast('동일한 내용으론 작성할 수 없어요!');
            } else {
                createItem();
            }
        } else {
            runToast('할 일을 입력해주세요!');
        }
    };

    const deleteItem = (id) => {
        setList((list) => list.filter((item) => item.id !== id));
        runToast('삭제되었어요!');
    };

    const toggleItem = (id) => {
        setList((list) => list.map((item) => (item.id === id ? { ...item, done: !item.done } : item)));
    };

    return { addItem, deleteItem, toggleItem };
};

export default useTodoContext;