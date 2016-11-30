/**
 * Created by Stone on 21/11/2016.
 */
import 'isomorphic-fetch';
import 'es6-promise';


//api
const defaultOptions = {
    Method: 'GET',
    //credentials : 'include',
    headers : {
        //x-auth-cookie: ''
    }
};

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response
    } else {
        let useError = false;

        if (useError) {
            var error = new Error(response.statusText)
            error.response = response;
            throw error
        } else {
            return Promise.reject(response.statusText);
        }
    }
}

function parseJSON(response) {
    return response.json()
}

function apiCall(props) {
    let {url, options} = props;
    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON);
        /*.then(function(data) {
            console.log('request succeeded with JSON response', data)
        }).catch(function(error) {
        console.log('request failed', error)
    })*/
}

function doGet(url) {
    let options = Object.assign({}, defaultOptions);
    return apiCall({url, options});
}

function doPost(url, body) { //todo FIXME check body is encrypted or not.
    let options = Object.assign({}, defaultOptions);
    options.method = 'POST';
    options.body =  body;
    return apiCall({url, options});
}

function doDelete(url) {
    let options = Object.assign({}, defaultOptions);
    options.method = 'DELETE';
    return apiCall({url, options});
}

function doPut(url, body) {
    let options = Object.assign({}, defaultOptions);
    options.method = 'PUT';
    return apiCall({url, body});
}


export {doPost, doPut, doDelete, doGet};