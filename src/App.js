import React from "react";
import "./App.css";
import { createStore, combineReducers } from "redux";
import userReducer from "./redux/reducers/users";
import productReducer from "./redux/reducers/product";
import { Provider } from "react-redux";
import { Container } from "react-bootstrap";
import ContainerIndex from "./containers";
import { applyMiddleware } from "redux";

const Logger = store => next => action => {
  let { user } = store.getState();

  if (!user.userInfo) {
    return;
  }
  next(action);
};

const combinate = combineReducers({
  user: userReducer,
  product: productReducer
});

const storeRedux = createStore(
  combinate,
  {},
  applyMiddleware(Logger)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
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
        <ContainerIndex />
      </Provider>
    </Container>
  );
}

export default App;
