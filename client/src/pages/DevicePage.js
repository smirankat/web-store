import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { fetchOneDevice } from "../http/deviceAPI";

const DevicePage = () => {
  // const device = { id: 1, name: "A52", price: "500", rating: 8, img: "image" };
  // const specifications = [
  //   { id: 1, title: "Display Size", description: "5.4 inches, 71.9 cm" },
  //   { id: 2, title: "OS", description: "iOS 14.1" },
  //   { id: 3, title: "Memory", description: "128 GB, 4 GB RAM" },
  //   { id: 4, title: "Battery", description: "Li-lon 2227 mAh" },
  //   { id: 5, title: "Camera", description: "12 MP" },
  // ];
  const [device, setDevice] = useState({ info: [] });
  const { id } = useParams();

  useEffect(() => {
    fetchOneDevice(id).then((data) => setDevice(data));
  }, []);

  const ratingStars = [...Array(device.rating).keys()];

  return (
    <Container>
      <h1 style={{ fontSize: 30 }}>{device.name}</h1>
      <p>
        {ratingStars.map((obj) => (
          <i
            key={obj.toString()}
            className="fas fa-star"
            style={{ fontSize: 12, color: "#E8C672" }}
          ></i>
        ))}
      </p>
      <Row>
        <Col lg={4} className="mx-auto mb-3">
          <Image
            width={300}
            height={300}
            src={process.env.REACT_APP_API_URL + device.img}
          />
        </Col>
        <Col lg={5} className="m-auto mb-3">
          <h2 style={{ fontSize: 22 }}>Device Specifications</h2>
          <Row>
            {device.info.map((info, index) => (
              <Row
                className="mx-auto"
                key={info.id}
                style={{
                  background: index % 2 === 0 ? "#eee" : "transparent",
                  padding: 10,
                }}
              >
                {info.title}: {info.description}
              </Row>
            ))}
          </Row>
        </Col>
        <Col lg={3} className="mx-auto mb-3">
          <Card
            className="d-flex flex-column align-items-center justify-content-around shadow"
            style={{ width: 200, height: 200 }}
          >
            <h3>{device.price} $</h3>
            <Button>Add to basket</Button>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DevicePage;
