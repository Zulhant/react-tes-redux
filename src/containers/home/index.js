import React, { useEffect } from "react";
import { Row, Alert } from "react-bootstrap";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actions from "../../redux/actions/product";

import CardItems from "../../components/cardItems";
import CardImage from "../../components/cardImages";
import Loading from "../../components/loading";

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
      {props.user.userInfo && (
        <span className="start-msg">
          Hai <b> {props.user.userInfo.name}</b>
        </span>
      )}
      <div className="wrapper">
        <div className="scrolls">
          {category && category.length > 0 ? (
            category.map((item, i) => {
              return (
                <CardImage
                  key={i}
                  textAlign="center"
                  image={item.imageUrl}
                  label={item.name}
                />
              );
            })
          ) : (
            <Loading />
          )}
        </div>
      </div>

      {promo && promo.length > 0 ? (
        <div>
          <h5>Promo</h5>
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
        </div>
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
