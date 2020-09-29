import React, { useState } from "react";
import { connect } from "react-redux";
import { registerUser } from "../redux";

function LoginContainer({ registerUser, auth }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("Data : " + JSON.stringify(auth));

  return (
    <div>
      <h2>Login Page </h2>
      <label htmlFor="displayName">Name:</label>
      <input
        type="text"
        id="displayName"
        name="displayName"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="pwd"
        name="pwd"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => registerUser(email, password)}>Sign Up</button>

      <div>{JSON.stringify(auth)}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  console.log("The state is" + JSON.stringify(state));
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  console.log("In here");
  return {
    registerUser: (email, password) => dispatch(registerUser(email, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
