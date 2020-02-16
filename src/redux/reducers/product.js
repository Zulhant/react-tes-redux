import {
  GET_PRODUCT,
  GET_DETAIL_PRODUCT,
  GET_PRODUCT_SEARCH
} from "../action-types/product";

const initialState = {
  payload: [],
  detail: {}
};

const productReduser = (state = initialState, action) => {
  switch (action.type) {
    case GET_DETAIL_PRODUCT:
      const data = state.payload.productPromo;

      let newDetail = [];
      if (data) {
        newDetail = data.filter(item => item.id == action.id);
      }
      return {
        ...state,
        detail: newDetail ? newDetail[0] : {}
      };
    case GET_PRODUCT:
      return {
        ...state,
        payload: action.payload
      };

    case GET_PRODUCT_SEARCH:
      let newArray = state.payload.productPromo.filter(
        item => item.title == action.search
      );
      return {
        ...state,
        payload: {
          ...state.payload.category,
          productPromo: newArray
        }
      };
    default:
      return state;
  }
};

export default productReduser;
