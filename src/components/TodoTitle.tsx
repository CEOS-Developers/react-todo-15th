import React from "react";
import styled from "styled-components";

import * as Icons from "./Icons";

const TitleWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 5px;
`;

const TitleLeftSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TitleCenterSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TitleRightSection = styled.section`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

const TitleText = styled.div`
  font-size: 14px;
  font-weight: 400;

  ${({ darkMode }) =>
    darkMode &&
    `
    color : white;
  `}
`;

const TitleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleEmptyIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const TodoTitle = ({ darkMode, ...props }) => {
  return (
    <TitleWrapper>
      <TitleLeftSection>
        {darkMode ? (
          <TitleIcon src={Icons.WhiteBack} />
        ) : (
          <TitleIcon src={Icons.BlackBack} />
        )}
        <TitleEmptyIcon />
        <TitleEmptyIcon />
      </TitleLeftSection>

      <TitleCenterSection>
        <TitleText darkMode={darkMode}>최어진</TitleText>
      </TitleCenterSection>

      <TitleRightSection>
        {darkMode ? (
          <TitleIcon src={Icons.WhiteSearch} />
        ) : (
          <TitleIcon src={Icons.BlackSearch} />
        )}
        {darkMode ? (
          <TitleIcon src={Icons.WhiteFile} />
        ) : (
          <TitleIcon src={Icons.BlackFile} />
        )}
        {darkMode ? (
          <TitleIcon src={Icons.WhiteMenu} />
        ) : (
          <TitleIcon src={Icons.BlackMenu} />
        )}
      </TitleRightSection>
    </TitleWrapper>
  );
};

export default TodoTitle;
