import React, { useState, useEffect } from "react";
import styled from "styled-components";

import * as Icons from './Icons';

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

  ${({ darkMode }) =>
    darkMode &&
    `
    color : white;
  `}
`;

const StatusBarIcon = styled.img`
  width: 15px;
  height: 15px;
  margin: 0px 1px;
`;

const TodoStatusBar = ({ date, darkMode, ...props }) => {
  return (
    <StatusBarWrapper>
      <StatusBarIconWrapper>
        <StatusBarTime darkMode={darkMode}>
            {('0' + date.getHours()).substr(-2) + ":" + ('0' + date.getMinutes()).substr(-2)}
        </StatusBarTime>
        {darkMode ? <StatusBarIcon src={Icons.WhiteLocation} /> : <StatusBarIcon src={Icons.BlackLocation} />}
      </StatusBarIconWrapper>

      <StatusBarIconWrapper>
        {darkMode ? <StatusBarIcon src={Icons.WhiteCellular} /> : <StatusBarIcon src={Icons.BlackCellular} />}
        {darkMode ? <StatusBarIcon src={Icons.WhiteWifi} /> : <StatusBarIcon src={Icons.BlackWifi} />}
        {darkMode ? <StatusBarIcon src={Icons.WhiteBattery} /> : <StatusBarIcon src={Icons.BlackBattery} />}
      </StatusBarIconWrapper>
    </StatusBarWrapper>
  );
};

export default TodoStatusBar;
