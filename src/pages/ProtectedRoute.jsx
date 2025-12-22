import { Navigate, Outlet } from "react-router";

const ProtectedRoute = ({ isLogin }) => {
  if (!isLogin) {
    return <Navigate to="/sign-in" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
