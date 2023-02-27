import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { AppRoutes } from "./routes";
import { AppProvider } from "hooks";
import "styles/index.css";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <GlobalStyles />
        <AppRoutes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
