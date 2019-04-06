import {CATEGORIES_LIST_REQUEST_SUCCESS} from "../actions/category-list";

const initialState = {
    categories: [],
};

const categoryListReducer = (state = initialState, action) => {
    switch (action.type) {
        case CATEGORIES_LIST_REQUEST_SUCCESS:
            return {...state, categories: action.categories};
        default:
            return state;
    }
};

export default categoryListReducer;