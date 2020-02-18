import React, { useRef, useEffect, useState } from "react";
import { Row, Card, Col, Form, Button, Container } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./style.css";
import { useHistory } from "react-router";

function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const history = useHistory();

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleEmail = e => {
    if (e.key == "Enter") {
      passwordRef.current.focus();
    }
  };

  const handlePassword = e => {
    if (e.key == "Enter") {
      alert("silahkan pilih login by google dan facebook");
    }
  };

  const onLoginWithFacebook = response => {
    if (response) {
      localStorage.setItem("access_user_fb", JSON.stringify(response));
      history.push("/");
    }
  };

  const onLoginWithGoogle = response => {
    if (response) {
      localStorage.setItem("access_user_google", JSON.stringify(response));
      history.push("/");
    }
  };

  return (
    <>
      <Row
        style={{
          marginTop: "10%"
        }}
      >
        <Col sm={12}>
          <Card>
            <Card.Body>
              <h4 align="center">Login</h4>
            </Card.Body>
            <Card.Body>
              <>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control
                    ref={emailRef}
                    onKeyDown={handleEmail}
                    type="email"
                    placeholder="Enter email"
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control
                    ref={passwordRef}
                    onKeyDown={handlePassword}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Row>
                  <Col lg={6} md={6} xs={6}>
                    <Form.Group controlId="formBasicCheckbox">
                      <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>
                  </Col>
                  <Col lg={6} md={6} xs={6}>
                    <Button
                      style={{
                        float: "right"
                      }}
                      variant="outline-info"
                      type="submit"
                    >
                      Sign In{" "}
                    </Button>
                  </Col>
                </Row>
                <br />
                <FacebookLogin
                  appId=""
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={onLoginWithFacebook}
                  cssClass="btn btn-primary"
                />
                ,
                <br />
                <GoogleLogin
                  clientId=""
                  buttonText="Login"
                  onSuccess={onLoginWithGoogle}
                  onFailure={onLoginWithGoogle}
                  cookiePolicy={"single_host_origin"}
                  render={renderProps => (
                    <Button
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                      className="btn btn-info"
                    >
                      Login With Google
                    </Button>
                  )}
                />
                <br />
              </>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Login;
