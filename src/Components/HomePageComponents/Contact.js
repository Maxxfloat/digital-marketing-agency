import React, { useRef, useEffect } from "react";
import axios from "axios";
import { Container, Form, Row } from "react-bootstrap";

const Contact = () => {
  const emailRef = useRef();
  const commentRef = useRef();
  const userContact = useEffect(() => {
    console.log(emailRef.current.value);

    let email = emailRef.current.value;
    let comment = commentRef.current.value;

    const userComment = { email, comment };
    console.log(userComment);
    return userComment;
  }, []);

  const submithadler = (event) => {
    event.preventDefault();
    // axios.post("https://localhost:3001/comment", userContact);
    console.log(userContact);
  };

  return (
    <Container className="py-5">
      <Row className={` justify-content-center align-items-center`}>
        <p className="text-center col-12" style={{ fontSize: "2vw" }}>
          ارسال نظرات و سفارشات
        </p>
        <Form
          onSubmit={(event) => submithadler(event)}
          className={` col-6 text-right p-4`}
          style={{ border: "3px solid gray", borderRadius: "10px" }}
        >
          <Form.Group>
            <Form.Label>ایمیل</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="ایمیل خودرا وارد کنید"
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>نظرات</Form.Label>
            <Form.Control ref={commentRef} as="textarea" rows={4} />
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
};

export default Contact;
