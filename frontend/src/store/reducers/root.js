import {combineReducers} from 'redux';
import itemListReducer from "./item-list";

const rootReducer = combineReducers({
    itemList: itemListReducer,
});

export default rootReducer;