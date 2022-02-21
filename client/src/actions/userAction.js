import * as actions from "../constants/userConstant";
import axios from "axios";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_LOGIN_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/login",
      { email, password },
      config
    );
    dispatch({
      type: actions.USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: actions.USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  dispatch({
    type: actions.USER_LOGOUT,
  });
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_REGISTER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/signup",
      { name, email, password },
      config
    );
    dispatch({
      type: actions.USER_REGISTER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const invoices = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_INVOICES_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "/api/users/payments",
      config
    );
    dispatch({
      type: actions.USER_INVOICES_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.USER_INVOICES_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subscribedMenu = (uid,mid) => async (dispatch) => {
  try {
    dispatch({
      type: actions.USER_SUBCRIBED_MENU_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/users/subscribe",
      {uid,mid},
      config  
    );
    dispatch({
      type: actions.USER_SUBCRIBED_MENU_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.USER_SUBCRIBED_MENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
}; 