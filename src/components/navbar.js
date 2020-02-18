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
import Logo from "../logo.svg";

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

  return (
    <Navbar className={props.navbarPosition}>
      <Container
        style={{
          maxWidth: "500px"
        }}
      >
        {props.navbarPosition == "navbar fixed-bottom" ? (
          <div className="navbar-bottom-position">
            <Row>
              <Col>
                <Nav.Link href="/">
                  <i className="fas fa-home"></i>
                  <br />
                  Home
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/product">
                  <i className="fas fa-rss-square"></i>
                  <br />
                  Feed
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/cart">
                  <i className="fas fa-cart-plus"></i>
                  <br />
                  Cart
                </Nav.Link>
              </Col>
              <Col>
                <Nav.Link href="/profile">
                  <i className="fas fa-user-circle"></i>
                  <br />
                  Profile
                </Nav.Link>
              </Col>
            </Row>
          </div>
        ) : (
          <>
            <Navbar.Brand href="/">
              <img width={60} src={Logo} />
            </Navbar.Brand>
            <Form inline>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text className="form-input-icon">
                    <i className="fas fa-search" />
                  </InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={onChangeInputSearch.bind(this)}
                  className="form-input"
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
