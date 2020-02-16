import React from "react";
import { Row, Card, Col, Form, Button, Container } from "react-bootstrap";
import FacebookLogin from "react-facebook-login";
import GoogleLogin from "react-google-login";
import "./style.css";

function Login(props) {
  const onLoginWithFacebook = response => {
    if (response) {
      localStorage.setItem("access_user_fb", JSON.stringify(response));
      props.history.push("/");
    }
  };

  const onLoginWithGoogle = response => {
    if (response) {
      localStorage.setItem("access_user_google", JSON.stringify(response));
      props.history.push("/");
    }
  };

  return (
    <Container
      style={{
        maxWidth: 540
      }}
    >
      <Row
        style={{
          marginTop: "10%"
        }}
      >
        <Col lg={4} />
        <Col lg={4}>
          <Card>
            <Card.Body>
              <h4 align="center">Login</h4>
            </Card.Body>
            <Card.Body>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password" />
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
                  appId="199496228064861"
                  autoLoad={false}
                  fields="name,email,picture"
                  callback={onLoginWithFacebook}
                  cssClass="btn btn-primary"
                />
                ,
                <br />
                <GoogleLogin
                  clientId="1080661092279-dd4cnlgpg3depnao0ac2ptrlh53od5mr.apps.googleusercontent.com"
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
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} />
      </Row>
    </Container>
  );
}

export default Login;
