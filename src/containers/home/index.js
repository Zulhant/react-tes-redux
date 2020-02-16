import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/product";

import NavbarApp from "../../componets/navbar";
import CardItems from "../../componets/cardItems";

import * as actionApiProduct from "../../api/product";

import "./style.css";

function Home(props) {
  useEffect(() => {
    actionApiProduct.getListProduct().then(response => {
      if (response) {
        props.getProduct(response[0].data);
      }
    });
  }, []);

  const category = props.product.payload.category;
  const promo = props.product.payload.productPromo;

  return (
    <>
      <NavbarApp navbarPosition="navbar fixed-top" {...props} />
      <Row
        style={{
          justifyContent: "center"
        }}
      >
        {category &&
          category.length > 0 &&
          category.map((item, i) => {
            return (
              <CardItems
                width="auto"
                height="auto"
                gridColoumn={3}
                textAlign="center"
                image={item.imageUrl}
                label={item.name}
              />
            );
          })}
      </Row>
      <br />
      {promo && promo.length > 0 ? (
        <div>
          <h4>Big Promo</h4>
          <Row>
            {promo.map((item, i) => {
              return (
                <CardItems
                  width="auto"
                  height={320}
                  imageHeight={230}
                  gridColoumn={6}
                  image={item.imageUrl}
                  label={item.title}
                  href={`/product/${item.id}`}
                />
              );
            })}
          </Row>
        </div>
      ) : (
        "Please Wait"
      )}
      <NavbarApp navbarPosition="navbar fixed-bottom" {...props} />
    </>
  );
}

const mapStateToProps = state => {
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

export default connect(mapStateToProps, mapDispathToProps)(Home);
