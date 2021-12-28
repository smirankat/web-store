import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import { Context } from "..";

const TypeBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <ListGroup>
      {device.types.map((type) => (
        <ListGroup.Item
          style={{ cursor: "pointer" }}
          className={
            type.id === device.selectedType.id ? "bg-secondary text-white" : ""
          }
          //   active={type.id === device.selectedType.id}
          onClick={() => device.setSelectedType(type)}
          key={type.id}
        >
          {type.name}
        </ListGroup.Item>
      ))}
      <ListGroup.Item
        style={{ cursor: "pointer" }}
        onClick={() => device.setSelectedType(device.types)}
      >
        All
      </ListGroup.Item>
    </ListGroup>
  );
});

export default TypeBar;
