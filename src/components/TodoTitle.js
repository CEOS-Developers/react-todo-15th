import React from "react";
import styled from "styled-components";

import icon_back from "../assets/black-icons/back.png";
import icon_search from "../assets/black-icons/search.png";
import icon_file from "../assets/black-icons/file.png";
import icon_menu from "../assets/black-icons/menu.png";

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
`;

const TitleIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const TitleEmptyIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const TodoTitle = (props) => {
  return (
    <TitleWrapper>
      <TitleLeftSection>
        <div></div>
        <TitleIcon src={icon_back} />
        <TitleEmptyIcon />
        <TitleEmptyIcon />
      </TitleLeftSection>
      
      <TitleCenterSection>
        <TitleText>최어진</TitleText>
      </TitleCenterSection>

      <TitleRightSection>
        <TitleIcon src={icon_search} />
        <TitleIcon src={icon_file} />
        <TitleIcon src={icon_menu} />
      </TitleRightSection>
    </TitleWrapper>
  );
};

export default TodoTitle;
