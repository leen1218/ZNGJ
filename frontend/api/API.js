/**
 * Created by Stone on 22/11/2016.
 */

import { URLConfig, HttpMethods } from './Settings';
import { CALL_API } from './index';
import * as ActionNames from '../actions/Names';

const URL_BASE = `${URLConfig.PROTOCOL}://${URLConfig.API_ROOT}:${URLConfig.PORT_GENERIC}`;

const Applicances = {

    getAll: () => (dispatch, getState) => {
        let state = getState().appliances;
        if (!state || state.length === 0) {
            return dispatch({
                [CALL_API] : {
                    types     : [ActionNames.CATEGORIES_REQUEST, ActionNames.CATEGORIES_SUCCESS, ActionNames.CATEGORIES_FAILURE],
                    endpoint : `${URL_BASE}/appliances`,
                    method   : HttpMethods.GET
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










export {Applicances, Addresses, Login, Orders};