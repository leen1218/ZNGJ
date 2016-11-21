/**
 * Created by Stone on 21/11/2016.
 */
import 'isomorphic-fetch';
import 'es6-promise';


//settings
const _config = {

    API_ROOT: ''

};


const _config_header = {
    
};


const _config_body = {
    
};


//api
function apiCall(options) {
    
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        var error = new Error(response.statusText)
        error.response = response
        throw error
    }
}


function doGet() {
    
}

function doPost() {
    
}

function doDelete() {
    
}

function doPut() {
    
}

//business logic




export {doPost, doPut, doDelete, doGet};