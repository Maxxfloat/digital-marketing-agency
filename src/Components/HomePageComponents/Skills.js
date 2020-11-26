import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Skills = () => {
  return (
    <>
      <Container>
        <Row>
          <h1>ویژگی ها</h1>
          <p>هر آنچه برای دیده شدن نیاز دارید</p>
        </Row>
        <Row>
          <div className="col-12">
            <img src="../Assets/" alt="کپی رایتینگ" />
          </div>
          <div className="col-12"></div>
          <div className="col-12"></div>
        </Row>
      </Container>
    </>
  );
};

export default Skills;
