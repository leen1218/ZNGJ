/**
 * Created by Stone on 13/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, ListItem, Input } from 'react-onsenui';
import SimpleList from './SimpleList';
import NavToolbar from './NavToolbar';

import '../styles/css/_addressEditor.css'

const placeholders = {
    name: '收货人地址',
    phone: '手机号码',
    postCode:'邮政编码(选填)',
    address:'详细地址',
    city: '城市',
    street: '街道'
};

class AddressEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = { };
        this.onSave=this.onSave.bind(this);
    }


    onSave(evt) {
        //todo impl checking logic.
        const { updateCallback } = this.props;
        if (updateCallback) {
            updateCallback();
        }
    }

    render() {
        const { navigator, isUpdating, addressInfo} = this.props;
        const navigatorProps = {
            hasBackButton: true,
            navigator: navigator,
            title: isUpdating ? '编辑地址' : '新增地址'
        };

        let me = this;
        let display = isUpdating ? addressInfo : {};
        let dataSource = [];
        ['name', 'phone', 'postCode', 'address', 'city', 'street'].forEach(function (e, i) {
            dataSource.push(
                {
                    key: e,
                    placeholder: placeholders[e],
                    text: display[e]
                }
            );

        });


        let renderRow = function(row, index) {
            let innerBlock = null;
            let isUpdating = me.props.isUpdating;
            let inputProps = {
                placeholder: row.placeholder,
                className: 'addressInput'
            };

            if (isUpdating) {
                inputProps.value = row.text;
            }

            switch (row.key) {
                case 'name':
                case 'phone':
                case 'postCode':
                    innerBlock = (<div className="center"> <Input float {...inputProps} /> </div>);
                    break;
                case 'address':
                    innerBlock = (<div className="center"> <textarea {...inputProps}></textarea> </div>);
                    break;
                case 'city':
                case 'street':
                {
                    return (<ListItem>
                        <div className="left"> test test </div>

                    </ListItem>);
                }
            }
            if (innerBlock) {
                return <ListItem> {innerBlock} </ListItem>
            }

        };



        let listProps = {
            dataSource: dataSource,
            renderRowCallback: renderRow
        };


        return (
            <Page renderToolbar = {() => (<NavToolbar {...navigatorProps}> </NavToolbar>)}>
                <SimpleList  {...listProps} />

                 <Button modifer="large quite" styles={{'text-align': 'center'}} onClick={this.onSave}> 保存 </Button>
            </Page>
        );
    }
}

AddressEditor.propTypes = {

};

/*
AddressEditor.defaultProps = {

};

*/

export default AddressEditor;
