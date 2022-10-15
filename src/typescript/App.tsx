import { Route, Routes } from 'react-router-dom';
import BooksPage from './pages/booksPage';
import LoginPage from './pages/loginPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="books" element={<BooksPage />} />
    </Routes>
  );
};

export default App;
