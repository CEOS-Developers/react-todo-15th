import styled from 'styled-components';

export const Main = styled.main`
    width: 350px;
    height: 650px;
    min-height: 500px;
    background-color: #fff;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.2) 0 0 20px;
    display: grid;
    grid-template-rows: 150px 1fr 1fr;
`;

export const Section = styled.section`
    padding: 0 16px;
    &:not(:last-of-type) {
        border-bottom: 1px solid #d3d3d3;
    }
`;
