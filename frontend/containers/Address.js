/**
 * Created by Stone on 12/11/2016.
 */

import React, { PropTypes } from 'react';
import { ListItem, Input, Button } from 'react-onsenui';
import AddressEditor from '../components/AddressEditor';

import ons from 'onsenui';
import { Utils } from '../util'
import '../styles/css/_Address.css';

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

        let deleteOrNot = function (src) {
            // console.log(arguments);
            if (src === 1) {
                console.log(evt);
                console.log('address deleted'); //todo FIXME IMPL
            }
        };

        let options = {
            title: '请确认',
            buttonLabels: ['取消', '确认'],
            callback: deleteOrNot
        };

        ons.notification.confirm('确认删除', options);
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
                    <div>
                    <div className="left1"> {userName} </div>
                    <div className="right1"> {userPhone} </div>
                    </div>

                    <div> {userAddress} </div>
                </div>

                <div className="addressEditorWrapper">
                    <label className="left">
                        <Input type="checkbox"
                               checked={isDefault}
                               onChange={this.onDefaultSelected}
                        > 设为默认地址 </Input>
                    </label>

                    <div className="right">
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
