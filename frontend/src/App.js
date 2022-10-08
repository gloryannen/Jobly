import { useEffect, useState } from "react";
import "./App.css";
import JoblyApi from "./api";
import Routing from "./Routes";
import NavBar from "./NavBar";
import { UserContext } from "./hooks/UserContext";
import useLocalStorage from "./hooks/UseLocalStorage";
import { decodeToken } from "react-jwt";

function App() {
  const [token, setToken] = useLocalStorage("token" || null);
  let [currentUser, setCurrentUser] = useState(null);
  const [applicationIds, setApplicationIds] = useState(new Set([]));

  useEffect(
    function loadUserInfo() {
      console.debug("App useEffect loadUserInfo", "token=", token);

      async function getUser() {
        if (token !== ("null" || null)) {
          let username = decodeToken(token).username;
          let currentUser = await JoblyApi.getUser(username);

          JoblyApi.token = token;
          setCurrentUser(currentUser);
          setApplicationIds(new Set(currentUser.applications));
        } else {
          setCurrentUser(null);
        }
      }
      getUser();
    },
    [token]
  );

  async function signup(newUser) {
    try {
      let token = await JoblyApi.registerUser(newUser);
      setToken(token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  }

  async function login(userData) {
    try {
      let token = await JoblyApi.login(userData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      return { success: false, errors };
    }
  }

  function logout() {
    setToken(null);
    setCurrentUser(null);
  }

  function hasAppliedJob(id) {
    return applicationIds.has(id);
  }

  function applyJob(id) {
    if (hasAppliedJob(id)) return;
    JoblyApi.applyJob(currentUser.username, id);
    setApplicationIds(new Set([...applicationIds, id]));
  }

  return (
    <UserContext.Provider
      value={{ currentUser, setCurrentUser, hasAppliedJob, applyJob }}
    >
      <div className="App container">
        <NavBar logout={logout} />
        <Routing login={login} signup={signup} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
