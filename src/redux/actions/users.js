import { GET_USER_DATA } from "../action-types/users";

export const GetUserData = data => {
  return {
    type: GET_USER_DATA,
    payload: data
  };
};
