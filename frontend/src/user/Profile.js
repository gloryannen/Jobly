import { useState, useContext } from "react";
import "./profile.css";

import { UserContext } from "../hooks/UserContext";
import JoblyApi from "../api";

const Profile = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const [formData, setFormData] = useState({
    firstName: currentUser.firstName,
    lastName: currentUser.lastName,
    email: currentUser.email,
    username: currentUser.username,
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    let user = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.editUser(username, user);
    } catch (error) {
      console.log(error);
    }

    setCurrentUser(updatedUser);
  }

  return (
    <div className="mt-5">
      <form>
        <div className="mb-3">
          <label className="form-label">
            Username: <b>{formData.username}</b>
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Password:
            <input
              className="form-control"
              type="text"
              name="password"
              value={formData.password}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            First Name:
            <input
              className="form-control"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Last Name:
            <input
              className="form-control"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">
            Email:
            <input
              className="form-control"
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </label>
        </div>

        <input
          className="btn btn-primary"
          type="submit"
          value="Save"
          onClick={handleSubmit}
        />
      </form>
    </div>
  );
};

export default Profile;
