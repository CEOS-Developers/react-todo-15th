declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    isDoneList?: Array<String>;
  }
}

interface IItemProps {
  id: string;
  text: string;
  isDoneList: Array<String>;
  handleTextClick: (string) => void;
  handleDeleteBtnClick: (string) => void;
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
      <li id={id} isDoneList={isDoneList} onClick={handleTextClick}>
        {text} &nbsp;
        <button id={id} onClick={handleDeleteBtnClick}>
          X
        </button>
      </li>
    </span>
  );
};

export default Item;
