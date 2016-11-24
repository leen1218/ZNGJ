/**
 * Created by Stone on 21/11/2016.
 */

var _authData = {};
const tokenKey = '__sina__12yxg';

var authUtils = {
    
    accessToken: null,
    
    isAuthenticated : () => { !!this.accessToken},
    
    getUserInfo: null,
    
    getAccessToken : () => {this.accessToken},
    
    setAccessToken : (token) => {this.accessToken = token;},  
    
    persistToken : (storage) => {storage && storage.setItem(tokenKey, this.accessToken)},
    
    reset: (storages) => {
        this.setAccessToken(null);
        storages && storages.getAll().forEach(function (storage) {
            if (storage && storage.removeItem) {
                storage.removeItem(tokenKey);
            } 
        }) 
    }
    
};



export default authUtils;