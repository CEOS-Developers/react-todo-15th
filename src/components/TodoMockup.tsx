import React from "react";
import styled from "styled-components";
import mockup from "../assets/mockup.png";

const MockupImage = styled.img`
  position: absolute;
  top: auto;
  right: auto;
  bottom: auto;
  left: auto;
  width: auto;
  height: 700px;
`;

const TodoMockup = (props) => {
  return <MockupImage src={mockup} />;
};

export default TodoMockup;
