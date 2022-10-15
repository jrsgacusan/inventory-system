import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/system';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/loginPage/LoginPage';

const defaultTheme = createTheme();
export type ThemeType = typeof defaultTheme;

console.log(defaultTheme);

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <MuiThemeProvider theme={defaultTheme}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<BooksPage />} />
        </Routes>
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
