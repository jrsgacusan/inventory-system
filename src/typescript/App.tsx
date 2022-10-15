import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/BooksPage';
import LoginPage from './pages/LoginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<BooksPage />} />
    </Routes>
  );
};

export default App;
