import { Dispatch, SetStateAction } from 'react';

export interface TodoItem {
    id: string;
    content: string;
    done: boolean;
}

export interface TodoItemContext {
    list: TodoItem[];
    setList: Dispatch<SetStateAction<TodoItem[]>>;
}
