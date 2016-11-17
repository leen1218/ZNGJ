/**
 * Created by Stone on 16/11/2016.
 */

//reference: http://www.cnblogs.com/jihua/archive/2012/09/28/yanzheng.html

const _phoneReg = /^(086)?1d{10}$/;
const _emailReg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/;
const _userNameReg = /^[a-zA-z]\w{3,15}$/;

var DataUtils = {
    checkEmpty: function(list, dataset, dictionary, result) {
        result = result || {};
        for (let code of  list) {
            //console.log(code);

            let value = dataset[code];
            if (value.length === 0) {
                result.ok = false;
                result.error = dictionary[code] + '不能为空!';
                return;
            }
        }

        result.ok = true;
    },

    checkPhone: phone => _phoneReg.test(phone),

    checkPassword: password => true,  //todo FIXME IMPL

    checkUserName: userName  => _userNameReg.test(userName),

    checkEmail: email => _emailReg.test(email)
};


export default DataUtils;