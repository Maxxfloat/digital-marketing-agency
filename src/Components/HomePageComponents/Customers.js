import React from 'react';
import { Container, Card, Row } from 'react-bootstrap';

const myColor = [
  'blue',
  'red',
  'pink',
  'light-green',
  'cyan',
  'white',
  'orange',
  'gray',
];
const customerList = myColor.map((color) => {
  return (
    <Card key={color} className="col-xl-3 col-md-6 m-1">
      <div style={{ backgroundColor: color, width: '100%', height: '50%' }}>
        <p>SOME BODY</p>
      </div>
      <Card.Body>
        <Card.Title>SOME BODY</Card.Title>
        <Card.Text>SOME BODY</Card.Text>
      </Card.Body>
    </Card>
  );
});

const Customers = () => {
  return (
    <section>
      <Container fluid style={{ height: '70vh' }}>
        <Row
          className={`d-flex justify-content-center align-items-center`}
          style={{ height: '70vh' }}
        >
          {customerList}
        </Row>
      </Container>
    </section>
  );
};

export default Customers;
