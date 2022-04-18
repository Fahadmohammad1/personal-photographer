import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({ singlePackage }) => {
  const { name, price, picture, description } = singlePackage;
  const navigate = useNavigate();
  return (
    <div id="services" className="mb-4">
      <Card className="mx-auto card-style" style={{ width: "18rem" }}>
        <Card.Img className="p-4" variant="top" src={picture} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>{description}</Card.Text>
          <h5>{price}</h5>
          <button
            className="w-100 primary-btn border-0"
            onClick={() => {
              navigate("/checkOut");
            }}
          >
            Hire
          </button>
        </Card.Body>
        <div className="border-style bg-white">
          <img
            src="	https://wpocean.com/wp/loveme/wp-content/uploads/2021/10/event-shape-1.png"
            alt=""
          />
        </div>
        <div className="border-style2 bg-white">
          <img
            src="https://wpocean.com/wp/loveme/wp-content/uploads/2021/10/event-shape-2.png"
            alt=""
          />
        </div>
      </Card>
    </div>
  );
};

export default Service;
