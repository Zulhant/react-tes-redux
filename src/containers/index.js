import React from "react";
import { Route, Switch } from "react-router-dom";
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

function ContainerIndex(props) {
  return (
    <div
      style={{
        padding: 10
      }}
    >
      <NavbarApp navbarPosition="navbar fixed-top" {...props} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/product" component={ProductPage} />
        <Route path="/product/:id" component={ProductDetail} />
        <Route path="/profile" component={ProfilePage} />
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

export default connect(mapStateToProps, mapDispathToProps)(ContainerIndex);
