import React from "react";
import "./App.css";
import { createStore, combineReducers } from "redux";
import userReducer from "./redux/reducers/users";
import productReducer from "./redux/reducers/product";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { Container } from "react-bootstrap";
import ContainerIndex from "./containers";

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
        maxWidth: 540,
        backgroundColor: "white"
      }}
    >
      <Provider store={storeRedux}>
        <BrowserRouter>
          <ContainerIndex />
        </BrowserRouter>
      </Provider>
    </Container>
  );
}

export default App;
