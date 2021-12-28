import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import CreateBrand from "../components/modals/CreateBrand";
import CreateDevice from "../components/modals/CreateDevice";
import CreateType from "../components/modals/CreateType";

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);

  return (
    <Container
      className="d-flex flex-column justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-secondary"}
        size="lg"
        style={{ width: 200 }}
        className="m-3 p-10"
      >
        Add type
      </Button>
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-secondary"}
        size="lg"
        style={{ width: 200 }}
        className="m-3 p-10"
      >
        Add brand
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"outline-secondary"}
        size="lg"
        style={{ width: 200 }}
        className="m-3 p-10"
      >
        Add device
      </Button>
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};

export default Admin;
