import styled, { css } from "styled-components";

export const Container = styled.header`
  ${({ theme }) => css`
    width: 100%;
    height: 80px;
    background-color: ${theme.colors.home.backgroundFooter};
    padding: 20px;

    > div {
      width: 100%;
      height: 100%;
      ${theme.grid.layout};
      margin: 0 auto;

      display: flex;
      align-items: center;
      justify-content: space-between;
    }
  `}
`;
