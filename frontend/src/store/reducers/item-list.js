import {ITEM_LIST_REQUEST_SUCCESS} from "../actions/item-list";

const initialState = {
    items: [],
};

const itemListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_LIST_REQUEST_SUCCESS:
            return {...state, items: action.items};
        default:
            return state;
    }
};

export default itemListReducer;