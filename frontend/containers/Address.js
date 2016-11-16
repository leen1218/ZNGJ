/**
 * Created by Stone on 12/11/2016.
 */

import React, { PropTypes } from 'react';
import { ListItem, Input, Button } from 'react-onsenui';
import AddressEditor from '../components/AddressEditor';

import ons from 'onsenui';
import { Utils } from '../util'

class Address extends React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
        this.onDelete = this.onDelete.bind(this);
        this.onDefaultSelected = this.onDefaultSelected.bind(this);
    }

    onDelete(evt) {

        let deleteOrNot = function (a, b, c) {//todo FIXME call back is not working at all.
             console.log(arguments);
        };

        let options = {
            title: '请确认',
            buttonLabels: ['取消', '确认'],
            callback: deleteOrNot
        };
        ons.notification.confirm({message: '确认删除'});

        let confirmed = false;
        if (confirmed) {
            console.log(evt);
            console.log('address deleted'); //todo IMPL
        }
    }

    onEdit(evt) {
        console.log(evt);
        console.log('address editted'); //todo IMPL
        const { navigator } = this.props;
        const props = {
            updateCallback: this.onUpdate,
            navigator: navigator
        };
        Utils.gotoComponent(navigator, AddressEditor, props);
    }

    onDefaultSelected(evt) {
        console.log(evt);
        console.log('address is now default'); //todo IMPL
    }

    onUpdate(evt) {
        console.log(evt);
        console.log('address updated'); //todo IMPL
    }

    render() {
        console.log('address rendered');
        //fake data
        this.props = this.props || {};
        let addressInfo = {                       //todo FIXME faked data.
            userName : 'tester',
            userAddress : '杭州市西湖区文二路391号西湖国际科技大厦',
            isDefault : false,
            userPhone : '13333333333'
        };
        
        const { navigator, id } = this.props;
        const { userName, userAddress, isDefault, userPhone} = addressInfo;  //todo FIXME
        return (
            <ListItem key={id}>

                <div className="addressWrapper">
                    <span className="left"> {userName} </span>
                    <span className="right"> {userPhone} </span>
                    <div> {userAddress} </div>
                </div>

                <div className="editorWrapper">
                    <label className="left">
                        <Input type="checkbox"
                               checked={isDefault}
                               onChange={this.onDefaultSelected}
                        > 设为默认地址 </Input>
                    </label>

                    <div style={{float: 'right'}}>
                        <span> <Button onClick={this.onEdit}> 编辑 </Button></span>
                        <span> <Button onClick={this.onDelete}> 删除 </Button></span>
                    </div>
                </div>

            </ListItem>
        );
    }
}

Address.propTypes = {
    navigator: PropTypes.object.isRequired

};

/*
Address.defaultProps = {
 
};

*/

export default Address;
