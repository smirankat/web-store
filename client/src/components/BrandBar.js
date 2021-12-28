import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Context } from "..";

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <div className="d-flex m-3 flex-wrap">
      {device.brands.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          key={brand.id}
          className={
            "py-2 px-3 m-2 " +
            (brand.id === device.selectedBrand.id ? "shadow" : "shadow-none")
          }
          onClick={() => device.setSelectedBrand(brand)}
          //   border={brand.id === device.selectedBrand.id ? "primary" : "light"}
        >
          {brand.name}
        </Card>
      ))}
      <Card
        style={{ cursor: "pointer" }}
        className={"py-2 px-3 m-2 "}
        onClick={() => device.setSelectedBrand(device.brands)}
      >
        All
      </Card>
    </div>
  );
});

export default BrandBar;
