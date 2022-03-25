import React from "react";
import styled from "styled-components";

import icon_location from "../assets/black-icons/location.png";
import icon_cellular from "../assets/black-icons/cellular.png";
import icon_wifi from "../assets/black-icons/wifi.png";
import icon_battery from "../assets/black-icons/battery.png";

const StatusBarWrapper = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  margin: 8px 13px 0px 13px;
`;

const StatusBarIconWrapper = styled.section`
  display: flex;
  flex-direction: row;
`;

const StatusBarTime = styled.div`
  margin: 0px 1px 0px 2px;
  font-size: 12px;
  font-weight: 700;
`;

const StatusBarIcon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 1px;
`;

const TodoStatusBar = (props) => {
  return (
    <StatusBarWrapper>
      <StatusBarIconWrapper>
        <StatusBarTime>14:59</StatusBarTime>
        <StatusBarIcon src={icon_location} />
      </StatusBarIconWrapper>
      
      <StatusBarIconWrapper>
        <StatusBarIcon src={icon_cellular} />
        <StatusBarIcon src={icon_wifi} />
        <StatusBarIcon src={icon_battery} />
      </StatusBarIconWrapper>
    </StatusBarWrapper>
  );
};

export default TodoStatusBar;
