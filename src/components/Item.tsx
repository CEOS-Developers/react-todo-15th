declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    isDoneList?: Array<Object>;
  }
}

interface IItemProps {
  id: string;
  text: string;
  isDoneList: Array<Object>;
  handleTextClick: React.MouseEventHandler<HTMLLIElement>;
  handleDeleteBtnClick: React.MouseEventHandler<HTMLButtonElement>;
}

const Item = (props: IItemProps) => {
  return (
    <span>
      <li
        id={props.id}
        isDoneList={props.isDoneList}
        onClick={props.handleTextClick}
      >
        {props.text} &nbsp;
        <button id={props.id} onClick={props.handleDeleteBtnClick}>
          X
        </button>
      </li>
    </span>
  );
};

export default Item;
