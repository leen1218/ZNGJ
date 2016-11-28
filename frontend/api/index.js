// import fetch from 'isomorphic-fetch';
// import Promise from 'promise';
//
// const API_KEY = '5a043a1bd95bf3ee500eb89de107b41e';
// const API_URL = 'http://api.openweathermap.org/data/2.5';
//
// // http://api.openweathermap.org/data/2.5/forecast/daily?id=524901&cnt=5&appid=5a043a1bd95bf3ee500eb89de107b41e
//
// const kelvinToCelsius = (kelvin) => kelvin - 273.15;
//
// const round = (value, decimals = 1) => {
//   const x = Math.pow(10, decimals);
//   return Math.round(x * value) / x;
// };
//
// const apiCall = (url) => {
//   return fetch(url)
//     .then(response => {
//       if (response.status >= 400) {
//         return Promise.reject('Invalid response');
//       }
//
//       return response.json();
//     })
//     .then(json => {
//       if (parseInt(json.cod) !== 200) {
//         return Promise.reject('Invalid response');
//       }
//
//       return json;
//     });
// };
//
// export const queryWeather = (city) => {
//   let data;
//
//   return apiCall(`${API_URL}/weather?q=${city.trim()}&appid=${API_KEY}`)
//     .then(json => {
//       data = {
//         temperature: round(kelvinToCelsius(json.main.temp), 0),
//         humidity: json.main.humidity,
//         icon: json.weather[0].id,
//         name: json.name,
//         country: json.sys.country.toLowerCase()
//       };
//
//       return apiCall(`${API_URL}/forecast/daily?id=${json.id}&cnt=5&appid=${API_KEY}`);
//     })
//     .then(json => {
//       return {
//         ...data,
//         forecast: json.list.map((d) => ({
//           weekday: (new Date(d.dt * 1000)).getDay(),
//           icon: d.weather[0].id,
//           maxTemp: round(kelvinToCelsius(d.temp.max), 0),
//           minTemp: round(kelvinToCelsius(d.temp.min), 0)
//         }))
//       };
//     });
// };

import { HttpMethods } from './Settings';
import { doPost, doPut, doDelete, doGet } from '../util/FetcherUtils';


// Fetches an API response and normalizes the result JSON according to schema.
// This makes every API response have the same shape, regardless of how nested it was.
function callApi(url, method, options) {

    switch (method) {
        case HttpMethods.GET:
            return doGet(url);
            break;
        case HttpMethods.PUT:
            return doPut(url, options);
            break;
        case HttpMethods.DELETE:
            return doDelete(url);
            break;
        case HttpMethods.POST:
            return doPost(url, options);
            break;
        default:
            throw new Error('unsupported http method');
            break;
    }
}

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API');

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API];
    if (typeof callAPI === 'undefined') {
        return next(action);
    }

    let { endpoint } = callAPI;
    let { method, types, options, callbacks } = callAPI;

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.');
    }

    if (!method) {
        //throw new Error('Specify one of the exported Schemas.');
        method = HttpMethods.GET;
    }

    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.');
    }

    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.');
    }

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data);
        delete finalAction[CALL_API];
        return finalAction;
    }

    const [ requestType, successType, failureType ] = types;
    next(actionWith({ type: requestType }));

    return callApi(endpoint, method, options).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    )
}


