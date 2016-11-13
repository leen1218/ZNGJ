/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, BottomToolbar } from 'react-onsenui';

import PhotoUploader from '../components/PhotoUploader';
import NavToolbar from '../components/NavToolbar';

import PriceTags from './PriceTags';
import OrderConfirmation from './OrderConfirmation';
import AddressManagement from './AddressManagement';
import DateTimePicker from '../components/DatePicker';

import ons from 'onsenui'
import { DateTimeUtils } from '../util';
import '../styles/css/_ProblemReport.css';

class ProblemReport extends React.Component {

    constructor(props) {
        super(props);
        this.state={};//todo FIXME populate states.
        this.checkList = {};


        this.gotoNext = this.gotoNext.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.onAddressSelected = this.onAddressSelected.bind(this);
        this.onDateSelected = this.onDateSelected.bind(this);
    }

    gotoNext(next) {
        const { navigator } = this.props;
        if (next && navigator) {
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

        this.gotoNext(OrderConfirmation);
    }

    onAddressSelected(evt) {
        console.log('address updated');
    }

    updateAddress() {
        this.gotoNext(AddressManagement);
    }

    onDateSelected(date, dateString) {
        console.log(date, dateString);   //todo FIXME implementation.
    }

    render() {
        const { navigator } = this.props;

        let navBarProps = {
            navigator: navigator,
            hasBackButton:true,
            title: '报修信息'
        };

        let userInfo = {};
        let selectedAddress = userInfo.defaultAddress; //needs to be updated on time.
        let addressBlock = selectedAddress ?
            (<div>
                使用地址: {userInfo.defaultAddress}
            </div>)
            : null;

        let dateTimeProps = {
            disabledDate: DateTimeUtils.beforeNow,
            size: 'large',
            onChange: this.onDateSelected
        };


        return (
            <Page renderToolbar={()=>(<NavToolbar {...navBarProps} />)}>

                {/*Photos*/}
                <section className="photoTaker">
                    <PhotoUploader />
                </section>


                {/*user address*/}
                <section>
                    <Button onClick={this.updateAddress}> 选择上门服务地址 </Button>
                    {addressBlock}
                </section>

                {/*service date*/}
                <section>
                    <DateTimePicker {...dateTimeProps}/>
                </section>

                {/*price tags*/}
                <PriceTags />

                <BottomToolbar>
                    <Button className="center" onClick={this.onSubmit} modifier="large quite"> 确认下单 </Button>
                </BottomToolbar>
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

