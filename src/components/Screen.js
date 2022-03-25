import './Screen.css';

const Screen = ({ children }) => {
  return (
    <div className="Screen">
      <section className="Container">{children}</section>
    </div>
  );
};

export default Screen;
