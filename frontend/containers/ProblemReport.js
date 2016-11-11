/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button } from 'react-onsenui';

import PhotoUploader from '../components/PhotoUploader';
import NavToolbar from '../components/NavToolbar';

import PriceTags from './PriceTags';
import OrderConfirmation from './OrderConfirmation';
import AddressManagement from './AddressManagement';
import DateTimePicker from '../components/DatePicker';

import ons from 'onsenui'

class ProblemReport extends React.Component {

    constructor(props) {
        super(props);
        this.state={};//todo FIXME populate states.
        this.checkList = {};


        this.gotoNext = this.gotoNext.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.onAddressSelected = this.onAddressSelected.bind(this);
    }

    gotoNext(navigator, next) {
        if (navigator && next) {
            navigator.pushPage({component: next});
        }
    }

    onSubmit() {
        console.log('order placed!');

        let check = -1;
        //todo do pre submit check.

        if (check >= 0) {
            return ons.notification.alert({message: 'something is wrong!'});
        }

        this.gotoNext({component: OrderConfirmation});
    }

    onAddressSelected(evt) {
        console.log('address updated');
    }

    updateAddress() {
        this.gotoNext({component: AddressManagement});
    }

    render() {
        const { navigator } = this.props;

        let navBarProps = {
            navigator: navigator,
            hasBackButton:true
        };

        let userInfo = {};
        let defaultAddressBlock = userInfo.defaultAddress ?
            (<div>
                使用默认地址: {userInfo.defaultAddress}
            </div>)
            : null;

        return (
            <Page renderToolbar={()=>(<NavToolbar {...navBarProps} />)}>

                {/*Photos*/}
                <div className="photoTaker">
                    <PhotoUploader />
                </div>

                {/*user address*/}
                <Button> 选择上门服务地址 </Button>            
                {defaultAddressBlock}

                {/*service date*/}
                <DateTimePicker />
                
                {/*price tags*/}
                <PriceTags />

                <Button className="center" onClick={this.onSubmit}> 确认下单 </Button>

            </Page>
        );
    }
}

ProblemReport.propTypes = {
 
};

const mapStateToProps = (state, ownProps) => {
     return null;
};
/*
const mapDispatchToProps = (dispatch, ownProps) => {
     return null;
};

ProblemReport = connect(mapStateToProps, mapDispatchToProps)($B);
*/
export default ProblemReport;

