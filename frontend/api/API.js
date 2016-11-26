/**
 * Created by Stone on 22/11/2016.
 */

import { doPost, doPut, doDelete, doGet } from '../util/FetcherUtils';
import { _config } from './Settings';
import { CALL_API } from './index';
import * as ActionNames from '../actions/Names';

const URL_BASE = `${_config.PROTOCOL}://${_config.API_ROOT}:${_config.PORT_GENERIC}`;

const Applicances = {


    getAll: () => (dispatch, getState) => {
        let state = getState().appliances;
        if (!state) {
            return dispatch({
                [CALL_API] : {
                    type: [ActionNames.CATEGORIES_REQUEST, ActionNames.CATEGORIES_SUCCESS, ActionNames.CATEGORIES_FAILURE],
                    url : `${URL_BASE}/appliances`
                }
            });
        }
        
        return null; //already cached.
    },

    getOne: () => {}
};


const Addresses = {
    getAll: () => {},
    addOne: () => {},
    deleteOne: () => {},
    updateOne: () => {}
};


const Login = {
    register: () => {},
    signIn: () => {},
    signOUt: () => {}
};


const Orders = {
    submit: () => {},
    getAll: () => {},
    delete: () => {},
    revoke: () => {},
    rating: () => {} //maybe not a thunk.
};










export {};