import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/loginPage/LoginPage';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<BooksPage />} />
      </Routes>
    </StyledEngineProvider>
  );
};

export default App;
