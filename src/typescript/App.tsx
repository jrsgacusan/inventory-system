import { StyledEngineProvider } from '@mui/styled-engine-sc';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './components/privateRoute/PrivateRoute';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/loginPage/LoginPage';

const App = () => {
  return (
    <StyledEngineProvider injectFirst>
      <Routes>
        <Route path="auth/*" element={<LoginPage />} />
        <Route path="/" element={<PrivateRoute />}>
          <Route path="/" element={<BooksPage />} />
        </Route>
        <Route path="*/*" element={<div>Page not found</div>} />
      </Routes>
    </StyledEngineProvider>
  );
};

export default App;
