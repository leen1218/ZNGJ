/**
 * Created by Stone on 01/11/2016.
 */
import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';

class OrderInfo extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.key = 'OrderInfo_Key';
    }

    render() {
        const {} = this.props;
        return (<Page><div> "This is ORDER INFO page" </div></Page>);
    }
}

OrderInfo.propTypes = {

};

/*
OrderInfo.defaultProps = {

};

*/

export default OrderInfo;

