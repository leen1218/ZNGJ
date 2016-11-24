/**
 * Created by Stone on 22/11/2016.
 */

import {doPost, doPut, doDelete, doGet} from '../util/FetcherUtils';
import {_config} from './Settings';

const URL_BASE = `${_config.PROTOCOL}://${_config.API_ROOT}:${_config.PORT_GENERIC}`;

const Applicances = {
    
    getAll: () => (dispatch, getState) => {},

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