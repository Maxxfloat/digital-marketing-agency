import React from "react";
import { Container, Card, Row } from "react-bootstrap";

import Style from "../Style/Customers.module.css";

const myColor = [
  "blue",
  "red",
  "pink",
  "greenyellow",
  "cyan",
  "sandybrown",
  "orange",
  "gray",
];
const customerList = myColor.map((color) => {
  return (
    <Card key={color} className="m-1" style={{ height: "20vh", width: "20vw" }}>
      <div
        className={`${Style.myCardImage} text-center`}
        style={{ backgroundColor: color, width: "100%", height: "50%" }}
      >
        <p className={`${Style.myCardTitle}`}>SOME BODY</p>
      </div>
      <Card.Body>
        <Card.Title
          style={{ fontSize: "2vw" }}
          className={`${Style.myCardTitle} m-0 p-0`}
        >
          SOME BODY
        </Card.Title>
        <Card.Text className={`${Style.myCardTitle}`}>SOME BODY</Card.Text>
      </Card.Body>
    </Card>
  );
});

const Customers = () => {
  return (
    <section>
      <Container
        fluid
        style={{ height: "90vh" }}
        className={`${Style.myContainer} d-flex`}
      >
        <Row
          className={`d-flex justify-content-center align-items-center m-5`}
          style={{ height: "70vh" }}
        >
          <div className="col-12 text-center">
            <p style={{ fontSize: "3.5vw" }}>تعدادی از مشتریان آژانس دیجیت</p>
          </div>
          {customerList}
        </Row>
      </Container>
    </section>
  );
};

export default Customers;
