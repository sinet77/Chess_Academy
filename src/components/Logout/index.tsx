import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { routes } from "../../routes";

const Logout = () => {
  const navigate = useNavigate();
  const { userLoggedIn, handleSignOut } = useAuth();
  return (
    <nav>
      {userLoggedIn ? (
        <>
          <button
            onClick={() => {
              handleSignOut().then(() => {
                navigate(routes.login);
              });
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={routes.login}>Login</Link>
          <Link to={routes.register}>Register New Account</Link>
        </>
      )}
    </nav>
  );
};

export default Logout;
