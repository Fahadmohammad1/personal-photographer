import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Service = ({ singlePackage }) => {
  const { name, price, picture, description } = singlePackage;
  const navigate = useNavigate();
  return (
    <div>
      <Card className="mx-auto" style={{ width: "18rem" }}>
        <Card.Img variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <Button
            onClick={() => {
              navigate("/checkOut");
            }}
            variant="primary"
          >
            Hire
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Service;
