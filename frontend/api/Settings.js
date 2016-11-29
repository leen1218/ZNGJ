/**
 * Created by Stone on 22/11/2016.
 */

//settings
const HttpMethods = {
    GET : 'GET',
    POST: 'POST',
    PUT : 'PUT',
    DELETE: 'DELETE'
};    

const _config = {
    API_ROOT: '118.178.180.143',
    PORT_GENERIC: '7000',
    PROTOCOL: 'https'
};

const _config_header = {
    "Content-Type": "application/json",
    'credential'  : 'include'
};

const _config_body = {

};

const InitialStore = {
    appliances: [],
    brands: {},
    user: null
    /*
    **

     id: xxxx //string.

     address: [ {}, {},     //crud 4.
         {
             location: STRING.
             phone: STRING.
             post : STRING.
             city : [ STRING, STRING, STRING]
             isDefault: BOOLEAN
         }
     ],


     orders: [ //crud 4.
         {
             id: xxxx
             details: {},
             ratings: NUMBER
         }
     ]

    *
    * */
};


export {_config as URLConfig, _config_header, _config_body, HttpMethods, InitialStore};

