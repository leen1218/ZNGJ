// // http://openweathermap.org/weather-conditions
//
// const THUNDER = '#b8d74b';
// const RAIN = '#3690f3';
// const SNOW = '#61c9f2';
// const MIST = '#1199c0';
// const CLEAR = '#f7d346';
// const CLOUDS = '#94a8bd';
// const EXTREME = '#ee5850';
//
// export const weatherCodeToColor = (code) => {
//   if (code < 0) {
//     return CLOUDS;
//   } else if (code >= 200 && code < 300) {
//     return THUNDER;
//   } else if (code >= 300 && code < 400) {
//     return RAIN;
//   } else if (code >= 500 && code < 600) {
//     return RAIN;
//   } else if (code >= 600 && code < 700) {
//     return SNOW;
//   } else if (code >= 700 && code < 800) {
//     return MIST;
//   } else if (code === 800) {
//     return CLEAR;
//   } else if (code >= 801 && code < 810) {
//     return CLOUDS;
//   } else if (code >= 900 && code < 903) {
//     return EXTREME;
//   } else {
//     return CLEAR;
//   }
// };


import {v4 as generateId} from 'node-uuid';
import DataUtils from './DataUtils';
import DateTimeUtils from './DateTimeUtils';

const _cityMap =
{
    zj : [{
        value: 'zj', label: '浙江',
        children: [
            {
                value: 'hz', label: '杭州', code: 'hz',
                children: [
                    {value: '上城区', label: '上城区'},
                    {value: '下城区', label: '下城区'},
                    {value: '西湖区', label: '西湖区'},
                    {value: '拱墅区', label: '拱墅区'},
                    {value: '江干区', label: '江干区'},
                    {value: '滨江区', label: '滨江区'},
                    {value: '萧山区', label: '萧山区'},
                    {value: '余杭区', label: '余杭区'},
                    {value: '富阳区', label: '富阳区'}]
            },

            {
                value: 'nb', label: '宁波', code: 'nb',
                children: [
                    {value: '1区', label: '1区'},
                    {value: '2区', label: '2区'},
                    {value: '3区', label: '3区'},
                    {value: '4区', label: '4区'},
                    {value: '5区', label: '5区'}
                ]
            }]
    }],
    js : [{
        value: '江苏', label: '江苏',
        children: [
            {
                value: '南京', label: '南京',  code: 'nj',
                children: [
                    {value: '1区', label: '1区'},
                    {value: '2区', label: '2区'},
                    {value: '3区', label: '3区'},
                    {value: '4区', label: '4区'},
                    {value: '5区', label: '5区'}
                ]
            },

            {
                value: '徐州', label: '徐州',  code: 'xz',
                children: [
                    {value: '1区', label: '1区'},
                    {value: '2区', label: '2区'},
                    {value: '3区', label: '3区'},
                    {value: '4区', label: '4区'},
                    {value: '5区', label: '5区'}
                ]
            },

            {
                value: '无锡', label: '无锡',  code : 'wx',
                children: [
                    {value: '1区', label: '1区'},
                    {value: '2区', label: '2区'},
                    {value: '3区', label: '3区'},
                    {value: '4区', label: '4区'},
                    {value: '5区', label: '5区'}
                ]
            }
        ]
    }]
    //more to be added here.
};

const _streetMap = {
    'zj-hz-scq' : [{label: '古翠社区', value:'gcsq'}, {label: '嘉绿苑社区', value: 'jlysq'}]
};


var Utils = {
    gotoComponent: (navigator, next, props) => {
        navigator && next && navigator.pushPage({component: next, props: props})
    },
    assignID: () => {
        generateId()
    },
    getAddressMap: city => _cityMap[city] || _cityMap,
    getStreetMap: code => _streetMap[code]
};




export {Utils, DateTimeUtils, DataUtils}
export default Utils;
