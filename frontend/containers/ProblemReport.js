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
import { DateTimeUtils, Utils } from '../util';
import '../styles/css/_ProblemReport.css';


const _placeHolders = {
    desc : '请描述具体问题(可选)'
};

class ProblemReport extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            selectedDate: "",
            address: "",
            problemDesc: ""
        };//todo FIXME populate states.
        this.checkList = {};


        //this.gotoNext = this.gotoNext.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.onAddressSelected = this.onAddressSelected.bind(this);
        this.onDateSelected = this.onDateSelected.bind(this);
        this.onDescChanged = this.onDescChanged.bind(this);
    }

    onSubmit() {
        console.log('order placed!');

        let check = -1;
        //todo do pre submit check.

        if (check >= 0) {
            return ons.notification.alert({message: 'something is wrong!'});
        }

        Utils.gotoComponent(this.props.navigator, OrderConfirmation);
    }

    onAddressSelected(evt) {
        console.log('address updated');
    }

    updateAddress() {
        Utils.gotoComponent(this.props.navigator, AddressManagement);
    }

    onDateSelected(date, dateString) {
        console.log(date, dateString);   //todo FIXME implementation.  Talk with backend on how to serialize the date format
        this.setState({selectedDate: dateString});
    }

    onDescChanged(evt) {
        if (evt && evt.srcElement) {    //not sure why this is not working....
            this.setState({problemDesc: evt.srcElement.value});
        } else {
            let descTextArea = this.descTextArea;
            if (descTextArea && descTextArea.value) {
                this.setState({problemDesc: descTextArea.value});
            }
        }
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


        let descProps = {
            onChange: this.onDescChanged, 
            placeholder:_placeHolders.desc,
            ref: (descTextArea) => {this.descTextArea = descTextArea}
        };
        
        return (
            <Page renderToolbar={()=>(<NavToolbar {...navBarProps} />)}>
                <div className="pageWrapper">
                
                {/*Photos*/}
                <section className="photoTaker">
                    <PhotoUploader />
                    <textarea className="problemDetails" {...descProps}></textarea>
                </section>


                {/*user address*/}
                <section>
                    <Button onClick={this.updateAddress}> 选择上门服务地址 </Button>
                    {addressBlock}
                </section>

                {/*service date*/}
                <section>
                    <div> 选择上门服务时间 </div>
                    <DateTimePicker {...dateTimeProps}/>
                </section>

                {/*price tags*/}
                <PriceTags />

                <BottomToolbar>
                    <Button className="center" onClick={this.onSubmit} modifier="large quite"> 确认下单 </Button>
                </BottomToolbar>
                    
                </div>    
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

