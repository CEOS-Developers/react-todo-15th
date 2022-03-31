import React from "react";
import styled from "styled-components";

const ToggleContainer = styled.main`
    position: absolute;
    top: 40px;
    right: 40px;
`;

const ToggleBtn = styled.input`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  width: 62px;
  height: 32px;
  display: inline-block;
  position: relative;
  border-radius: 50px;
  overflow: hidden;
  outline: none;
  border: none;
  cursor: pointer;
  background-color: #707070;
  transition: background-color ease 0.3s;

&:before {
  content: "🌖 off";
  display: block;
  position: absolute;
  z-index: 2;
  width: 28px;
  height: 28px;
  background: #fff;
  left: 2px;
  top: 2px;
  border-radius: 50%;
  font: 10px/28px Helvetica;
  text-transform: uppercase;
  font-weight: bold;
  text-indent: -22px;
  word-spacing: 37px;
  color: #fff;
  text-shadow: -1px -1px rgba(0,0,0,0.15);
  white-space: nowrap;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  transition: all cubic-bezier(0.3, 1.5, 0.7, 1) 0.3s;
}

&:checked {
  background-color: #4CD964;
}

&:checked:before {
  left: 32px;
}
`;

const DarkmodeBtn = ({ darkMode, setDarkMode }) => {
  return (
    <ToggleContainer>
        <ToggleBtn type="checkbox" checked={darkMode} onChange={(e) => setDarkMode(!darkMode)} />
    </ToggleContainer>
  )
};

export default DarkmodeBtn;
