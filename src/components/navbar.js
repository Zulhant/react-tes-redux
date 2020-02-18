import React, { useRef, useEffect, useState } from "react";
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
  const [search, setSearch] = useState("");

  const onChangeInputSearch = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (!search) {
      getListProduct().then(response => {
        props.getProduct(response[0]);
      });
    } else {
      props.getProductBySearch(search);
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
            <Form inline onSubmit={onSubmit}>
              <InputGroup>
                <FormControl
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  onChange={onChangeInputSearch}
                  value={search}
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
