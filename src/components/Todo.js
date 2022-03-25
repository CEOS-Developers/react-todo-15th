import { useState } from 'react';
import Form from './Form';
import Item from './Item';

export default function Todo() {
  const [savedList, setSavedList] = useState([]);
  let [toDoList, setToDoList] = useState([]);
  let [doneList, setDoneList] = useState([]);
  toDoList = savedList.filter((todo) => todo.isDone === false);
  doneList = savedList.filter((todo) => todo.isDone === true);

  const ToDoList = () => {
    return toDoList.map((task) => (
      <Item
        task={task}
        key={task.id}
        savedList={toDoList}
        setSavedList={setToDoList}
      />
    ));
  };

  const DoneList = () => {
    return doneList.map((task) => (
      <Item
        task={task}
        key={task.id}
        savedList={doneList}
        setSavedList={setDoneList}
      />
    ));
  };

  return (
    <div>
      <Form savedList={savedList} setSavedList={setSavedList} />
      <h2>{`To Do List (${toDoList.length})`}</h2>
      <ToDoList />
      <h2>{`Done List (${doneList.length})`}</h2>
      <DoneList />
    </div>
  );
}
