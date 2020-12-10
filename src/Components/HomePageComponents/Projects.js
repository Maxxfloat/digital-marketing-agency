import React from "react";

import { Container, Row } from "react-bootstrap";

import digitImage from "../Assets/digit project.png";

const Projects = () => {
  return (
    <>
      <Container fluid style={{ height: "50vh", margin: "40px 0px" }}>
        <Row className="d-flex justify-content-center align-items-center">
          <div className="col-12">
            <p className="text-center" style={{ fontSize: "3.5vw" }}>
              پروژه های تکمیل شده
            </p>
            <Row
              className="justify-content-center align-items-center py-3"
              style={{ border: "solid black 3px", borderRadius: "500px" }}
            >
              <a
                href="/"
                className="col-md-12 col-xl-6 pt-md-2 d-flex justify-content-center"
              >
                <img
                  src={digitImage}
                  alt="digit project"
                  style={{ width: "300px", height: "auto" }}
                />
              </a>
              <p className="col-md-12 col-xl-6 text-center">
                پروژه تکمیل شده وب سایت دیجیتال مارکتینگ دیجیت
              </p>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
