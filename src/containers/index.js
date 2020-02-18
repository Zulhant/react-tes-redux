import React, { useEffect } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as actionProduct from "../redux/actions/product";
import * as actionUser from "../redux/actions/users";
import NavbarApp from "../components/navbar";

import HomePage from "./home";
import ProductPage from "./product";
import ProductDetail from "./product/detailProduct";
import LoginPage from "./login";
import ProfilePage from "./profile";
import CartPage from "./cart";

function ContainerIndex(props) {
  useEffect(() => {
    const { userInfo } = props.user;

    if (!userInfo) {
      props.history.push("/login");
    }
  }, []);

  return (
    <div
      style={{
        padding: 10
      }}
    >
      <NavbarApp navbarPosition="navbar fixed-top" {...props} />
      <Switch>
        <Route path="/login" component={LoginPage} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/product" component={ProductPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/" component={HomePage} />
      </Switch>
      <NavbarApp {...props} navbarPosition="navbar fixed-bottom" />
    </div>
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
      ...actionUser,
      ...actionProduct
    },
    dispatch
  );
};

export default connect(
  mapStateToProps,
  mapDispathToProps
)(withRouter(ContainerIndex));
