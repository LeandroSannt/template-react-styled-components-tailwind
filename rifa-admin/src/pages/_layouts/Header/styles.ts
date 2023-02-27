import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 80px;
    background-color: ${theme.colors.home.backgroundHeader};
    padding: 20px;

    > div {
      width: 100%;
      height: 100%;
      max-width: ${theme.grid.layout};
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;
