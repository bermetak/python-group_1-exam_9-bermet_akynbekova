import axios, {ITEMS_URL} from "../../urls";


export const ITEM_LIST_REQUEST_SUCCESS = "ITEM_LIST_REQUEST_SUCCESS";


export const loadItems = () => {
    return dispatch => {
        axios.get(ITEMS_URL)
            .then(response => {
                console.log(response.data);
                return dispatch({type: ITEM_LIST_REQUEST_SUCCESS, items: response.data});
            })
            .catch(error => console.log(error));
    }
};