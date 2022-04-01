declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    isDoneList?: boolean;
  }
}

interface IItemProps {
  id: string;
  text: string;
  isDoneList: boolean;
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
