/**
 * Created by Stone on 21/11/2016.
 */

const TEST_KEY = '__1_test_1__';
const TEST_VALUE = "a";

let _inMem_data = {};
let supportLocalStorage = () => {
    try {
        window.localStorage.setItem(TEST_KEY, TEST_VALUE);
        window.localStorage.removeItem(TEST_KEY);
        return true;
    } catch (e) {
        return false;
    }
};


var StorageUtils = {

    inMemoryStorage: {
        getItem : (key) => _inMem_data[key],
        setItem : (key, value) => {_inMem_data[key] = value},
        removeItem: (key) => {this.setItem(key, null); delete _inMem_data[key]}
    },

    getStorage: () => {
        if (window && window.localStorage && supportLocalStorage()) {
            return window.localStorage;
        }

        return this.inMemoryStorage;
    },

    getAll: () => {
       return supportLocalStorage() ? [this.getStorage(), this.inMemoryStorage] : [this.inMemoryStorage];
    }

};


export default StorageUtils;

