import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/product";
import * as actionApiProduct from "../../api/product";

import CardItems from "../../components/cardItems";

import Loading from "../../components/loading";

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
      {promo && promo.length > 0 ? (
        <Row>
          {promo.map((item, i) => {
            return (
              <CardItems
                key={i}
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
      ) : (
        <Loading />
      )}
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
