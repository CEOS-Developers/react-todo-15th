import React from "react";

const WelcomeText = () => {
  return (
    <div id="WelcomBox" className="Box">
      <div id="WelcomTitle">
        <span id="TitleInfo">집중해서 마치는 오늘 할 일</span>
        <span id="TitleName">기어업</span>
      </div>
      <div id="WelcomText">
        기어업은 스스로 집중해서 일을 끝내고싶은 사람들을 위해 여기 있어요.
        오늘도 함께 할 일을 시작해볼까요?
      </div>
    </div>
  );
};

export default WelcomeText;
