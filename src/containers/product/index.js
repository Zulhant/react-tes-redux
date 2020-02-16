import React, { useEffect, useState } from "react";
import { Container, Row } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/product";
import * as actionApiProduct from "../../api/product";

import NavbarApp from "../../componets/navbar";
import CardItems from "../../componets/cardItems";

function Home(props) {
  useEffect(() => {
    actionApiProduct.getListProduct().then(response => {
      if (response) {
        props.getProduct(response[0].data);
      }
    });
  }, []);

  const promo = props.product.payload.productPromo;

  return (
    <>
      <NavbarApp {...props} navbarPosition="navbar fixed-top" />
      {promo && promo.length > 0 ? (
        <div>
          <h4>Product</h4>
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
      <NavbarApp {...props} navbarPosition="navbar fixed-bottom" />
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
