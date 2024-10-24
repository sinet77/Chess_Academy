import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";
import { doSignOut } from "../../firebase/auth";

const Logout = () => {
  const navigate = useNavigate();
  const { userLoggedIn } = useAuth();
  return (
    <nav>
      {userLoggedIn ? (
        <>
          <button
            onClick={() => {
              doSignOut().then(() => {
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
