import {combineReducers} from 'redux';
import itemListReducer from "./item-list";
import categoryListReducer from "./category-list";
import loadItemReducer from "./item-detail";
import loginReducer from "./login";
import authReducer from "./auth";
import tokenLoginReducer from "./app";

const rootReducer = combineReducers({
    login: loginReducer,
    auth: authReducer,
    app: tokenLoginReducer,
    itemList: itemListReducer,
    categoryList: categoryListReducer,
    itemDetail: loadItemReducer,
});

export default rootReducer;