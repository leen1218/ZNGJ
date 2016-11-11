/**
 * Created by Stone on 07/11/2016.
 */

import React, { PropTypes } from 'react';
import DatePicker from 'antd/lib/date-picker';  // just for js
import 'antd/lib/date-picker/style/css';  // with style


//const { MonthPicker, RangePicker } = DatePicker;



class DateTimePicker extends React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.onChange = this.onChange.bind(this);
    }

    onChange(date, dateString) {
        console.log(date, dateString);
    }


    render() {
        const {onChangeCallBack} = this.props;
        return (<DatePicker  onChange={onChangeCallBack || this.onChange} />);
    }
}

DateTimePicker.propTypes = {
 
};

/*
DatePicker.defaultProps = {
 
};

*/

export default DatePicker;
