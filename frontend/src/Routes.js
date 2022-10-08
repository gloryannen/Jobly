import { React, useContext } from "react";
import { Route, Routes, Navigate, Outlet } from "react-router-dom";

import Home from "./Home";
import Profile from "./user/Profile";
import SignUpForm from "./user/SignUp";
import LoginForm from "./user/Login";
import Companies from "./companies/Companies";
import Company from "./companies/Company";
import Jobs from "./jobs/Jobs";
import Job from "./jobs/Job";
import { UserContext } from "./hooks/UserContext";

function PrivateRoutes() {
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

function Routing({ login, signup }) {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}></Route>
      <Route element={<PrivateRoutes />}>
        <Route exact path="companies" element={<Companies />}></Route>
        <Route
          exact
          path="companies/:companyHandle"
          element={<Company />}
        ></Route>
        <Route exact path="jobs" element={<Jobs />}></Route>
        <Route exact path="jobs/:id" element={<Job />}></Route>
        <Route exact path="profile" element={<Profile />}></Route>
      </Route>
      <Route
        exact
        path="signup"
        element={<SignUpForm signup={signup} />}
      ></Route>
      <Route exact path="login" element={<LoginForm login={login} />}></Route>
    </Routes>
  );
}

export default Routing;
