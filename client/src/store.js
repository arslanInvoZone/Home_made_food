import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userInvoicesReducer, userLoginReducer, userRegisterReducer, userSubscribedMenu } from "./reducers/userReducer";
import { addMenuReducer, deleteMenuReducer, menuMelasReducer, menusListReducer, subscribersListReducer } from "./reducers/menuReducer";


const reducer = combineReducers({
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    menuMeals:menuMelasReducer,
    userInvoices:userInvoicesReducer,
    menusList:menusListReducer,
    userSubMenu:userSubscribedMenu,
    deletedMenu:deleteMenuReducer,
    addedMenu:addMenuReducer,
    subscribersInfo:subscribersListReducer
})

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;