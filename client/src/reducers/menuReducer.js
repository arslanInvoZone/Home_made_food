import * as actions from '../constants/menuConstant'
export const menuMelasReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.MENU_MEALS_REQUEST:
      return { loading: true, melas:[] }
    case actions.MENU_MEALS_SUCCESS:
      return { loading: false, meals: action.payload }
    case actions.MENU_MEALS_FAIL:           
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const menusListReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.MENUS_LIST_REQUEST:
      return { loading: true, menusList:[] }
    case actions.MENUS_LIST_SUCCESS:
      return { loading: false, menusList: action.payload }
    case actions.MENUS_LIST_FAIL:           
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const deleteMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.DELETE_MENU_REQUEST:
      return { loading: true}
    case actions.DELETE_MENU_SUCCESS:
      return { loading: false, message: action.payload }
    case actions.DELETE_MENU_FAIL:           
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const addMenuReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.ADD_MENU_REQUEST:
      return { loading: true }
    case actions.ADD_MENU_SUCCESS:
      return { loading: false, message: action.payload }
    case actions.ADD_MENU_FAIL:           
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const subscribersListReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.SUBCRIBERS_LIST_REQUEST:
      return { loading: true }
    case actions.SUBCRIBERS_LIST_SUCCESS:
      return { loading: false, subscribers: action.payload }
    case actions.SUBCRIBERS_LIST_FAIL:           
      return { loading: false, error: action.payload }
    default:
      return state
  }
}