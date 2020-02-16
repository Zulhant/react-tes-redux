import React, { useEffect, useState } from "react";
import { Container, Row, Col, Image, Button, Badge } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/product";
import NavbarApp from "../../componets/navbar";

function ProductDetail(props) {
  let id = props.match.params.id;

  useEffect(() => {
    props.getDetailProduct(id);
  }, []);

  const detail = props.product.detail;

  return (
    <>
      <NavbarApp {...props} navbarPosition="navbar fixed-top" />
      <div>
        {detail ? (
          <Row>
            <Col md={12} xs={12}>
              <Image
                src={detail.imageUrl}
                rounded
                style={{
                  width: "100%"
                }}
              />
            </Col>
            <Col md={12} xs={12}>
              <h2>{detail.title}</h2>

              <p>{detail.description}</p>

              <Row>
                <Col lg={6}>
                  <Badge variant="secondary">{detail.price}</Badge>
                </Col>
                <Col lg={6}>
                  <Button style={{ float: "right" }}>Buy</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        ) : (
          "Please Wait"
        )}
      </div>
    </>
  );
}

const mapStateToProps = state => {
  console.log("state", state);
  return {
    ...state
  };
};

const mapDispathToProps = dispatch => {
  return bindActionCreators(
    {
      ...actions
    },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispathToProps)(ProductDetail);
