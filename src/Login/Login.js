import React, { useState } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import Cookies from "universal-cookie";
import './Login.css'
const cookies = new Cookies();

export default function Login() {
  // initial state
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [, setLogin] = useState(false);

  const handleSubmit = (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();

    // set configurations
    const configuration = {
      method: "post",
      url: "https://api.render.com/deploy/srv-cee32spgp3jvikc99g50?key=jCejhNtlNKM/login",
      data: {
        email,
        password,
      },
    };

    // make the API call
    axios(configuration)
      .then((result) => {
        // set the cookie
        cookies.set("TOKEN", result.data.token, {
          path: "/",
        });
        // redirect user to the auth page
        window.location.href = "/auth";

        setLogin(true);
      })
      .catch((error) => {
        error = new Error();
        window.alert("Invalid Credentials")
      });
  };

  return (
    <div id='login'>
      {/* <h2 id='loginName'>Login</h2> */}
      <Form id='forms' onSubmit={(e) => handleSubmit(e)}>
        {/* email */}
        <Form.Group class='groupForm' controlId="formBasicEmail">
          <Form.Label id='emailLabel'>Email address</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
          />
        </Form.Group>

        {/* password */}
        <Form.Group class='groupForm' controlId="formBasicPassword">
          <Form.Label id='passLabel'>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />
        </Form.Group>
        <br></br>
        {/* submit button */}
        <button class='button-89' type="submit" onClick={(e) => handleSubmit(e)} >
          Login
        </button>
      </Form>

    </div>
  );
}
