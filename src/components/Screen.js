import React from 'react';
import './Screen.css';

const Screen = ({ children }) => {
  return (
    <div className="Screen">
      {/* header */}
      {/* <header>

      </header> */}

      <div className="title">Todo List ( 0 / 0 )</div>
      {/* section */}
      <div>{children}</div>

      {/* <section>

      </section> */}
    </div>
  );
};

export default Screen;
