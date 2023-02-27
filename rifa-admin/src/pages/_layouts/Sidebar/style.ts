import styled, { css } from "styled-components";
import { lighten, shade, darken } from "polished";

export const Container = styled.div`
  ${({ theme }) => css`
    main {
      background-color: ${theme.colors.dashboard.background};

      .backgroundContainer {
        background-color: ${theme.colors.dashboard.containerBackground};
      }
    }

    .sidebar {
      padding: 14px;

      background: ${theme.colors.dashboard.sidebar};
    }

    .sidebar-text-color {
      color: ${theme.colors.dashboard.textNavlink};

      &:hover {
        color: ${lighten(0.2, theme.colors.dashboard.textNavlink)};
      }
    }

    .sidebar-text-color-active {
      color: ${theme.colors.dashboard.active};
    }

    .header {
      background: ${theme.colors.dashboard.header};

      .userNameColor {
        color: ${theme.colors.dashboard.textNavlink};
      }
    }
  `}
`;
