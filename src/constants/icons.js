import styled from 'styled-components';
import bin from '../constants/icons/bin.svg';

export const Bin = styled.svg`
  background-image: ${() => `url(${bin})`};
  background-size: cover;
  background-position: center;

  border: none;

  width: 24px;
  height: 24px;
  &:hover {
    cursor: pointer;
  }
`;
