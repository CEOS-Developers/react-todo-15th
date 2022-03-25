import {
  BsCheckCircleFill,
  BsCheckCircle,
  BsFillPencilFill,
  BsFillTrashFill,
} from 'react-icons/bs';
import './TodoItem.css';

const TodoItem = ({ todo, onIsDoneToggle, onRemove }) => {
  const { id, text, isDone } = todo;
  return (
    <div className="TodoItem">
      <div className={`Content ${isDone ? 'Done' : ''}`}>
        {isDone ? (
          <button className="CheckButton" onClick={() => onIsDoneToggle(id)}>
            <BsCheckCircleFill className="CheckButtonFill" />
          </button>
        ) : (
          <button className="CheckButton" onClick={() => onIsDoneToggle(id)}>
            <BsCheckCircle className="CheckButtonUnFill" />
          </button>
        )}
        <span className="Text">{text}</span>
        <button className="EditButton">
          <BsFillPencilFill />
        </button>
        <button
          className="DeleteButton"
          onClick={() => {
            onRemove(id);
          }}
        >
          <BsFillTrashFill />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
