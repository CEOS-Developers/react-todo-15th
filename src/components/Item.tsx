import { IItemProps } from './Interface';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    isDoneList?: boolean;
  }
}

const Item = ({
  id,
  text,
  isDoneList,
  handleTextClick,
  handleDeleteBtnClick,
}: IItemProps) => {
  return (
    <span>
      <li id={id} isDoneList={isDoneList} onClick={() => handleTextClick(id)}>
        {text} &nbsp;
        <button
          id={id}
          onClick={() => {
            handleDeleteBtnClick(id);
          }}
        >
          X
        </button>
      </li>
    </span>
  );
};

export default Item;
