import React, { useRef, useState } from "react";
import { Form, Card, Alert, Container, Button } from "react-bootstrap";

const Signup = () => {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const submitHnadler = async (event) => {
    setLoading(true);
    event.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password Not Confirm");
    }
    try {
      setError("");
    } catch {
      setError("Failed To Create Account");
    }
    setLoading(false);
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ height: "90vh" }}
    >
      <div className="w-100 text-right" style={{ maxWidth: "400px" }}>
        <Card>
          <Card.Body>
            <Form onSubmit={submitHnadler}>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form.Group>
                <Form.Label>ایمیل</Form.Label>
                <Form.Control
                  type="email"
                  ref={emailRef}
                  placeholder="ایمیل خودرا وارد کنید"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>رمز عبور</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordRef}
                  placeholder="رمز را وارد کنید"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>تایید رمز عبور</Form.Label>
                <Form.Control
                  type="password"
                  ref={passwordConfirmRef}
                  placeholder="تایید رمز عبور"
                />
              </Form.Group>
              <Button variant="primary" disabled={loading} type="submit">
                ثبت نام
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
};

export default Signup;
