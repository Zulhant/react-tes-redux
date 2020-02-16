import React from "react";
import "./App.css";
import { createStore, combineReducers } from "redux";
import userReducer from "./redux/reducers/users";
import productReducer from "./redux/reducers/product";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./containers/home";
import ProductPage from "./containers/product";
import ProductDetail from "./containers/product/detailProduct";
import LoginPage from "./containers/login";
import { Container } from "react-bootstrap";

const combinate = combineReducers({
  user: userReducer,
  product: productReducer
});

const storeRedux = createStore(
  combinate,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

function App() {
  return (
    <Container
      style={{
        maxWidth: 540
      }}
    >
      <Provider store={storeRedux}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/product" component={ProductPage} />
            <Route exact path="/product/:id" component={ProductDetail} />
          </Switch>
        </BrowserRouter>
      </Provider>
    </Container>
  );
}

export default App;
