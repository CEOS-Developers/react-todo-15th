declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    isDoneList?: Array<String>;
  }
}

const Item = ({
  id,
  text,
  isDoneList,
  handleTextClick,
  handleDeleteBtnClick,
}) => {
  return (
    <span>
      <li id={id} isDoneList={isDoneList} onClick={handleTextClick}>
        {text} &nbsp;
        <button onClick={handleDeleteBtnClick}>X</button>
      </li>
    </span>
  );
};

export default Item;
