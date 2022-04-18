import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, , error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const email = useRef("");
  const password = useRef("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(email.current.value, password.current.value);
  };
  console.log(user);
  console.log(error);
  return (
    <div className="w-50 mx-auto mt-5">
      <Form className="text-start">
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={email} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={password} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button
          onClick={handleFormSubmit}
          variant="outline-primary w-100"
          type="submit"
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default SignUp;
