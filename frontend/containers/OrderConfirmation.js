/**
 * Created by Stone on 06/11/2016.
 */
import React, { PropTypes } from 'react';
import { Page, Button } from 'react-onsenui';
import OrderContent from '../components/OrderContent';
import NavToolbar from '../components/NavToolbar';

class OrderConfirmation extends React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.onOrderSubmitted = this.onOrderSubmitted.bind(this);
    }

    onOrderSubmitted() {
        console.log('order placed');
        //todo FIXME IMPL, checking logic.

        //todo FIXME IMPL, hooked with store.
    }

    render() {

        let navBarProps = {
            navigator: this.props.navigator,
            hasBackButton:true,
            title: '订单确认'
        };
        
        let orderContentProps = { //todo  FIXME faked.
            navigator: this.props.navigator,
            user: {
                name : '111',
                phone: '122222243333',
                address: '12-34-56-90-00-12-45'
            },
            time: '2016-10-23 12:00pm',
            items : [
                {title: 'a', desc: 'x1'},
                {title: 'a1', desc: '$123'},
                {title: 'a2', desc: '$123'},
                {title: 'a3', desc: '$123'}
            ]

        };

        return (
            <Page renderToolbar={()=>(<NavToolbar {...navBarProps}/>)}>
                <OrderContent {...orderContentProps}/>
                <div style={{textAlign: 'center'}}>
                <Button onClick={this.onOrderSubmitted} > 提交订单 </Button>
                </div>
            </Page>);
    }
}

OrderConfirmation.propTypes = {

};

/*
OrderConfirmation.defaultProps = {

};

*/

export default OrderConfirmation;
