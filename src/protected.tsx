import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./context/authContext/index";

const Protected = () => {
  const { userLoggedIn } = useAuth();

  return userLoggedIn ? <Outlet /> : <Navigate to="/login" />;
};

export default Protected;
