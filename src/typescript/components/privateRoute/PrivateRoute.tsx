import { Outlet, Navigate } from 'react-router-dom';

const PrivateRoute = () => {
  const auth = null;
  return auth ? <Outlet /> : <Navigate to="/auth/sign-in" />;
};

export default PrivateRoute;
