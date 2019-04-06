import {ITEM_GET_ERROR, ITEM_GET_REQUEST, ITEM_GET_SUCCESS} from "../actions/item-detail";

const initialState = {
    item: [],
    errors: {}
};

const loadItemReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_GET_REQUEST:
            return {...state, errors: {}};
        case ITEM_GET_SUCCESS:
            return {...state, item: action.item};
        case ITEM_GET_ERROR:
            return {...state, errors: action.errors};
        default:
            return state
    }
};


export default loadItemReducer;