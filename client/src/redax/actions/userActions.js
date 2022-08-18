export const loginIn =(email, password, rememberMe, captcha) => {
  return async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);
  if (response.data.resultCode === 0) {
      dispatch(getAuthUserData_())
  } else {
    if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrl());
    }}
      let message = response.data.messages.length > 0 ? response.data.messages[0] : "Some error";
      dispatch(stopSubmit("login", {_error: message}));
  };
}