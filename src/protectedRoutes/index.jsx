import Cookies from "js-cookie";
import { Navigate, Outlet } from "react-router-dom";

const LogAuth = () => {
  const isChecked = Cookies.get("token");
  const user = { loggedIn: isChecked ? true : false };
  return user.loggedIn;
};

const ProtectedRoutes = () => {
  const isAuth = LogAuth();
  const userRedirect = {
    loggedIn: isAuth ? <Outlet /> : <Navigate to="/login" />,
  };
  return userRedirect.loggedIn;
};

export default ProtectedRoutes;
