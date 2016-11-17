/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, BottomToolbar } from 'react-onsenui';
import SimpleList from '../components/SimpleList';
import NavToolbar from '../components/NavToolbar';
import Address from './Address';
import AddressEditor from '../components/AddressEditor';


class AddressManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {                 //todo FIXME move this to store.
            addressList: [],
            selectedAddress: 'aaaa'
        };
        
        this.gotoNext = this.gotoNext.bind(this);
        this.addAddress = this.addAddress.bind(this);
        this.onAddressAdded = this.onAddressAdded.bind(this);
    }

    gotoNext(next, props) {
        const { navigator } = this.props;
        if (next && navigator) {
            navigator.pushPage({component: next, props: props});
        }
    }

    addAddress() {
        //todo FIXME, use store.
        this.gotoNext(AddressEditor, {updateCallback: this.onAddressAdded});
    }

    onAddressAdded() {
        //todo FIXME, add action/redurcer
    }

    render() {
        const {navigator} = this.props;
        const navigatorProps = {
            hasBackButton: true,
            navigator: navigator,
            title: '地址管理'
        };

        const listProps = {
            dataSource: [1, 2, 3, 4, 5, 6, 7, 8, 9],     //todo FIXME, get from store.
            renderRowCallback: (row, index) =>
                <Address
                    key={index}
                    id={index}
                    data={row}
                    navigator={navigator}
                > </Address>
        };

        return (
            <Page renderToolbar = {() => (<NavToolbar {...navigatorProps}> </NavToolbar>)}>

                <SimpleList {...listProps}>
                </SimpleList>

                <BottomToolbar>
                    <Button onClick={this.addAddress} modifier="large quite" className="center"> 新增地址 </Button>
                </BottomToolbar>
            </Page>
        );
    }
}

AddressManagement.propTypes = {
    navigator: PropTypes.object.isRequired
};

/*
AddressManagement.defaultProps = {
 
};

*/

export default AddressManagement;
