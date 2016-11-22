/**
 * Created by Stone on 22/11/2016.
 */

//settings
const _config = {
    API_ROOT: '',
    PORT_GENERIC: '34592',
    PROTOCAL: 'https://',
    toURL : (endPoint) => `${this.API_ROOT} + '\/' + ${this.PORT_GENERIC} + '\/' + ${endPoint}`
};

const _config_header = {
    "Content-Type": "application/json"
};

const _config_body = {

};


export {_config, _config_header, _config_body};

