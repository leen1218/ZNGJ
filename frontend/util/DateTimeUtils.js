/**
 * Created by Stone on 16/11/2016.
 */


var DateTimeUtils = {
    beforeNow: function (current) {
        return current && current.valueOf() < Date.now();
    }
};


export default DateTimeUtils;