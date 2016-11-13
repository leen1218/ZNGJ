/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, BottomToolbar } from 'react-onsenui';
import SimpleList from '../components/SimpleList';
import NavToolbar from '../components/NavToolbar';

class AddressManagement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {                 //todo FIXME move this to store.
            addressList: [],
            selectedAddress: 'aaaa'
        };
        
        this.gotoNext = this.gotoNext.bind(this);
        this.addAddress = this.addAddress.bind(this);
    }

    gotoNext(next, props) {
        const { navigator } = this.props;
        if (next && navigator) {
            navigator.pushPage({component: next, props: props});
        }
    }

    addAddress() {
        this.gotoNext();     //todo
    }

    render() {
        const {navigator} = this.props;
        const navigatorProps = {
            hasBackButton: true,
            navigator: navigator,
            title: '地址管理'
        };

        const listProps = {
            //todo render listItems for list

        };

        return (
            <Page renderToolbar = {() => (<NavToolbar {...navigatorProps}> </NavToolbar>)}>
                <SimpleList  {...listProps} />

                <BottomToolbar>
                    <Button onClick={this.addAddress} modifier="large quite" className="center"> 新增地址 </Button>
                </BottomToolbar>
            </Page>

        );
    }
}

AddressManagement.propTypes = {
 
};

/*
AddressManagement.defaultProps = {
 
};

*/

export default AddressManagement;
