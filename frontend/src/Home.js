import { useContext } from "react";
import { UserContext } from "./hooks/UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  let { currentUser } = useContext(UserContext);
  return (
    <div className="row min-vh-100 justify-content-center align-items-center">
      <div className="col-12">
        <h1 className="text-center">Jobly</h1>
        <p>All the jobs in one, convenient place.</p>
        {currentUser ? (
          <h2>Welcome Back, {currentUser.username}!</h2>
        ) : (
          <p>
            <Link className="btn btn-primary mx-2" to="/login">
              Log in
            </Link>
            <Link className="btn btn-primary mx-2" to="/signup">
              Sign up
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
