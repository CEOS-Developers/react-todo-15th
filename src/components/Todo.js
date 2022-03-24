import { useState } from 'react';

import Form from './Form';
import Item from './Item';

export default function Todo() {
  const [savedList, setSavedList] = useState([]);

  const TodoList = () => {
    return savedList.map((task, index) => (
      <Item
        task={task}
        savedList={savedList}
        setSavedList={setSavedList}
        key={index}
      />
    ));
  };

  return (
    <div>
      <Form savedList={savedList} setSavedList={setSavedList} />
      <h2>Things to Do</h2>
      <TodoList />
    </div>
  );
}
