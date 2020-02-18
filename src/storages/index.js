export const getUserInfo = () => {
  let fb = localStorage.getItem("access_user_fb");
  let google = localStorage.getItem("access_user_google");

  return {
    fb,
    google
  };
};
