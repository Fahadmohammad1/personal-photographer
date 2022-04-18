import React from "react";
import { Accordion } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="w-50 mx-auto mt-5">
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            Difference between Authorization and Authentication
          </Accordion.Header>
          <Accordion.Body>
            <strong>Authorization</strong> is a process to verify someone's
            identity.
            <br />
            <strong>Authentication</strong> is a process to verify which spacial
            access given to that user. example: A page admin
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            {" "}
            What other services does firebase provide other than authentication?
          </Accordion.Header>
          <Accordion.Body>
            <strong>Firebase</strong> also provides Analytics, Cloud messaging,
            Realtime database, Testlab, Performance
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            We are using <strong>firebase</strong> because of it has a strong
            security system and it is very popular. Also it is handle by google.
            <strong>Some alternative of firebase</strong>
            <br />
            <li>Back4App</li>
            <li>Kuzzle</li>
            <li>NativeScript</li>
            <li>Flutter</li>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blogs;
