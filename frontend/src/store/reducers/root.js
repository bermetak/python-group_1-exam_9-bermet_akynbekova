import {combineReducers} from 'redux';
import itemListReducer from "./item-list";
import categoryListReducer from "./category-list";

const rootReducer = combineReducers({
    itemList: itemListReducer,
    categoryList: categoryListReducer,
});

export default rootReducer;