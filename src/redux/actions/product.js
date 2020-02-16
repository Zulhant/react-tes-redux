import {
  GET_DETAIL_PRODUCT,
  GET_PRODUCT,
  GET_PRODUCT_SEARCH
} from "../action-types/product";

export const getProduct = array => {
  return {
    type: GET_PRODUCT,
    payload: array
  };
};

export const getDetailProduct = id => {
  return {
    type: GET_DETAIL_PRODUCT,
    id
  };
};

export const getProductBySearch = search => {
  return {
    type: GET_PRODUCT_SEARCH,
    search
  };
};
