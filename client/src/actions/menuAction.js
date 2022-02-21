import * as actions from "../constants/menuConstant";
import axios from "axios";
export const mealsList = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.MENU_MEALS_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "/api/menus/meals",
      config
    );
    dispatch({
      type: actions.MENU_MEALS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.MENU_MEALS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const menusListData = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.MENUS_LIST_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "/api/menus/",
      config
    );
    dispatch({
      type: actions.MENUS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.MENUS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteMenu = (id) => async (dispatch) => {
  try {
    dispatch({
      type: actions.DELETE_MENU_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",

      },
    };
    
    const { data } = await axios.post(
      "/api/menus/delete",
      {id},
      config
    );
    dispatch({
      type: actions.DELETE_MENU_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.DELETE_MENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const addMenu = (menu_name,description,image) => async (dispatch) => {
  try {
    dispatch({
      type: actions.ADD_MENU_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "/api/menus/add",
      {menu_name,description,image},
      config
    );
    dispatch({
      type: actions.ADD_MENU_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.ADD_MENU_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const subscribersList = () => async (dispatch) => {
  try {
    dispatch({
      type: actions.SUBCRIBERS_LIST_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      "/api/menus/subscribers",
      config
    );
    dispatch({
      type: actions.SUBCRIBERS_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actions.SUBCRIBERS_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};