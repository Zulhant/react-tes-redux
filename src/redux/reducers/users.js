import { getUserInfo } from "../../storages";
import { GET_USER_DATA } from "../action-types/users";

const initialState = {
  userInfo: null
};

const userReduser = (state = initialState, action) => {
  const { fb, google } = getUserInfo();

  let newUser = null;

  if (google) {
    newUser = JSON.parse(google).profileObj;
  }

  if (fb) {
    newUser = JSON.parse(fb);
  }

  switch (action.type) {
    case GET_USER_DATA:
      return {
        userInfo: action.payload
      };
    default:
      return {
        userInfo: newUser
      };
  }
};

export default userReduser;
