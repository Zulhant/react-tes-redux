import { GET_USER_DATA } from "../action-types/users";

const initialState = {
  userInfo: {}
};

const userReduser = (state = initialState, action) => {
  let fb = localStorage.getItem("access_user_fb");
  let google = localStorage.getItem("access_user_google");

  let newUser = {};

  if (google) {
    newUser = JSON.parse(google).profileObj;
  }

  if (fb) {
    newUser = JSON.parse(fb);
  }

  console.log("new user", newUser);

  return {
    userInfo: newUser
  };
};

export default userReduser;
