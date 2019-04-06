import axios from "axios";
import {ITEMS_URL} from "../../urls";

export const ITEM_GET_REQUEST = "ITEM_GET_REQUEST";
export const ITEM_GET_SUCCESS = "ITEM_GET_SUCCESS";
export const ITEM_GET_ERROR = "ITEM_GET_ERROR";


export const loadItem = (id) => {
    return dispatch => {
        dispatch({type: ITEM_GET_REQUEST});
        return axios.get(ITEMS_URL + id).then(response => {
                console.log(response);
                return dispatch({type: ITEM_GET_SUCCESS, item: response.data});
            })
            .catch(error => {
                console.log(error);
                console.log(error.response);
                return dispatch({type: ITEM_GET_ERROR, errors: error.response.data});
            });
    }
};