import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

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
                navigate("/login");
              });
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to={"/login"}>Login</Link>
          <Link to={"/register"}>Register New Account</Link>
        </>
      )}
    </nav>
  );
};

export default Logout;
