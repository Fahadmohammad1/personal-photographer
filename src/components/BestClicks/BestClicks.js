import React from "react";
import { Card } from "react-bootstrap";

const BestClicks = () => {
  return (
    <div>
      <h1 className="my-5">Best Clicks</h1>
      <div className="d-md-flex align-items-center">
        <div className="px-5">
          <Card className="bg-dark text-white">
            <Card.Img
              src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F34%2F2018%2F07%2F16%2Fepic-wedding-photos-abbi-hearne-02-0718-2000.jpg"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
        <div className="px-5 d-md-flex flex-column">
          <Card className="bg-dark text-white my-2">
            <Card.Img
              src="https://images.squarespace-cdn.com/content/v1/56e5bf3be707eb51222e3a7d/1582849943448-SZ3FJ148IGTEA6SR4SAC/3_banner_duke_images.jpg?format=1000w"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white my-2">
            <Card.Img
              src="https://images.squarespace-cdn.com/content/v1/56e5bf3be707eb51222e3a7d/1582849943448-SZ3FJ148IGTEA6SR4SAC/3_banner_duke_images.jpg?format=1000w"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
          <Card className="bg-dark text-white my-2">
            <Card.Img
              src="https://images.squarespace-cdn.com/content/v1/56e5bf3be707eb51222e3a7d/1582849943448-SZ3FJ148IGTEA6SR4SAC/3_banner_duke_images.jpg?format=1000w"
              alt="Card image"
            />
            <Card.ImgOverlay>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Card.Text>Last updated 3 mins ago</Card.Text>
            </Card.ImgOverlay>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BestClicks;
