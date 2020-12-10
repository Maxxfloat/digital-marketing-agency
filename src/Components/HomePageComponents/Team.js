import React from "react";

import { Container, Card } from "react-bootstrap";

const Team = () => {
  return (
    <Container style={{ backgroundColor: "#9ee7ff", padding: "40px" }}>
      <p className="text-center" style={{ fontSize: "3.5vw" }}>
        اعضای تشکیل دهنده تیم
      </p>
      <Card>
        <Card.Body>
          <Card.Title className="text-center">امید نشاطی</Card.Title>
          <Card.Text className="text-center">
            تنها عضو تشکیل دهنده تیم امید نشاطی
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Team;
