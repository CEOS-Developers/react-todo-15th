import './Screen.css';

const Screen = ({ children, doneCnt, todoCnt }) => {
  return (
    <div className="Screen">
      <header className="Title">Todo List ( {todoCnt} / {doneCnt} )</header>
      <section className="Container">{children}</section>
    </div>
  );
};

export default Screen;

