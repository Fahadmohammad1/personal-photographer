import React, { useRef, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import facebookLogo from "../../images/logos/Facebook.png";
import googleLogo from "../../images/logos/Google.png";
import {
  useAuthState,
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";

const SignIn = () => {
  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetError] =
    useSendPasswordResetEmail(auth);

  const email = useRef("");
  const password = useRef("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(email.current.value, password.current.value);
  };

  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  if (loading) {
    return (
      <Button variant="primary" disabled>
        <Spinner
          as="span"
          animation="grow"
          size="sm"
          role="status"
          aria-hidden="true"
        />
        Loading...
      </Button>
    );
  }

  if (user) {
    console.log(user);
    navigate(from, { replace: true });
  }
  const handleForgetPassword = () => {
    sendPasswordResetEmail(email.current.value);
  };

  return (
    <div className="w-50 mx-auto mt-5 ">
      <Form className="text-start">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={email} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={password} type="password" placeholder="Password" />
        </Form.Group>
        <Button
          onClick={handleFormSubmit}
          variant="outline-primary w-100"
          type="submit"
        >
          Sign In
        </Button>
      </Form>
      <div>
        <button onClick={handleForgetPassword}>forget password?</button>
      </div>
      <div className="d-flex mt-4">
        <hr style={{ height: "2px" }} className="w-50" />
        <p className="mx-2">OR</p>
        <hr style={{ height: "2px" }} className="w-50" />
      </div>
      <div>
        <button className="rounded-pill">
          <img src={facebookLogo} alt="" /> Sign In with Google
        </button>
        <button
          onClick={() => {
            signInWithGoogle();
          }}
          className="rounded-pill"
        >
          <img src={googleLogo} alt="" /> Sign In with Google
        </button>
      </div>
    </div>
  );
};

export default SignIn;
