import React from "react";
import {
  Navbar,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Col,
  Row
} from "react-bootstrap";

import { getListProduct } from "../api/product";
import "./style.css";

function NavbarApp(props) {
  const onChangeInputSearch = e => {
    let val = e.target.value;

    if (!val) {
      getListProduct().then(response => {
        props.getProduct(response[0]);
      });
    } else {
      props.getProductBySearch(val);
    }
  };

  const onLogout = () => {
    if (props.user.userInfo.name) {
      localStorage.removeItem("access_user_google");
      localStorage.removeItem("access_user_fb");
    }

    props.history.push("/login");
  };

  return (
    <Navbar className={props.navbarPosition}>
      <Container
        style={{
          maxWidth: "540px"
        }}
      >
        {props.navbarPosition == "navbar fixed-bottom" ? (
          <div className="navbar-bottom-position">
            <Row>
              <Col>
                <Nav.Link href="/">Home</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/product">Feed</Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/cart">Cart</Nav.Link>
              </Col>
              <Col>
                <Nav.Link>Profile</Nav.Link>
              </Col>
            </Row>
          </div>
        ) : (
          <>
            <Navbar.Brand href="/">Logo</Navbar.Brand>
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>
                    <i className="fas fa-user" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={onChangeInputSearch.bind(this)}
                  style={{
                    width: 300
                  }}
                />
              </InputGroup>
            </Form>
          </>
        )}
      </Container>
    </Navbar>
  );
}

export default NavbarApp;
