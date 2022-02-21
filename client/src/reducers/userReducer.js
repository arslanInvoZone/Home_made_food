import * as actions from '../constants/userConstant'
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_LOGIN_REQUEST:
      return { loading: true }
    case actions.USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actions.USER_LOGIN_FAIL:
      return { loading: false, error: action.payload }
    case actions.USER_LOGOUT:
      return {}
    default:
      return state
  }
}

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_REGISTER_REQUEST:
      return { loading: true }
    case actions.USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case actions.USER_REGISTER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userInvoicesReducer = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_INVOICES_REQUEST:
      return { loading: true }
    case actions.USER_INVOICES_SUCCESS:
      return { loading: false, userInvoices: action.payload }
    case actions.USER_INVOICES_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const userSubscribedMenu = (state = {}, action) => {
  switch (action.type) {
    case actions.USER_SUBCRIBED_MENU_REQUEST:
      return { loading: true }
    case actions.USER_SUBCRIBED_MENU_SUCCESS:
      return { loading: false, message: action.payload }
    case actions.USER_SUBCRIBED_MENU_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}