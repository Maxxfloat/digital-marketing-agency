import React from "react";
import { Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div>
      <Container className="py-5">
        <Row className={` justify-content-center align-items-center`}>
          <p className="text-center col-12" style={{ fontSize: "3.5vw" }}>
            راه های ارتباط با ما
          </p>
          <Form
            className={` col-6 text-right p-4`}
            style={{ border: "3px solid gray", borderRadius: "10px" }}
          >
            <Form.Group>
              <Form.Label>ایمیل</Form.Label>
              <Form.Control type="email" placeholder="ایمیل خودرا وارد کنید" />
            </Form.Group>
            <Form.Group>
              <Form.Label>نظرات</Form.Label>
              <Form.Control as="textarea" rows={4} />
            </Form.Group>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary m-2" type="submit">
                ثبت
              </button>
            </div>
          </Form>
        </Row>
      </Container>
      );
    </div>
  );
};

export default Contact;
