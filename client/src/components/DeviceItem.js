import React from "react";
import { Card, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { DEVICE_ROUTE } from "../utils/consts";

const DeviceItem = ({ device }) => {
  const navigate = useNavigate();
  return (
    <Card
      className="m-3"
      style={{ cursor: "pointer", width: 150 }}
      border={"light"}
      onClick={() => navigate(DEVICE_ROUTE + "/" + device.id)}
    >
      <Image
        style={{ objectFit: "contain" }}
        width={150}
        height={150}
        src={process.env.REACT_APP_API_URL + device.img}
        // fluid
        // rounded
      />
      <div className="d-flex justify-content-between align-items-center text-black-50">
        <div>{device.brandId}</div>
        <div className="d-flex align-items-center">
          <div>{device.rating}</div>
          <i
            className="fas fa-star"
            style={{ fontSize: 12, color: "#E8C672" }}
          ></i>
        </div>
      </div>
      <div>{device.name}</div>
    </Card>
  );
};

export default DeviceItem;
