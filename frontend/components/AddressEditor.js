/**
 * Created by Stone on 13/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, ListItem, Input, Icon } from 'react-onsenui';
import SimpleList from './SimpleList';
import NavToolbar from './NavToolbar';
import Cascader from 'antd/lib/cascader';
import Select from 'antd/lib/select'

import { Utils } from  '../util';
import '../styles/css/_addressEditor.css';
import 'antd/lib/cascader/style/css';
import 'antd/lib/select/style/css';

const _placeholders = {
    name: '收货人地址',
    phone: '手机号码',
    postCode:'邮政编码(选填)',
    address:'详细地址',
    city: '城市',
    street: '街道'
};
const Option = Select.Option;

class AddressEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCityPicker: false,
            showStreetPicker: false

        };
        this.onSave=this.onSave.bind(this);
        this.onPickerSelected=this.onPickerSelected.bind(this);
        this.onUpdateCity=this.onUpdateCity.bind(this);
        this.onUpdateStreet=this.onUpdateStreet.bind(this);
    }

    onSave(evt) {
        //todo impl checking logic.
        const { updateCallback } = this.props;
        if (updateCallback) {
            updateCallback();
        }
    }

    onPickerSelected(evt) {
        //todo FIMME IMPL.
        console.log(evt);
    }

    onUpdateCity(value) {
        console.log(value);
    }

    onUpdateStreet(value) {
        console.log(value);
    }

    onUpdateEntity(name, value) {
        console.log(value);
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
                    placeholder: _placeholders[e],
                    text: display[e]
                }
            );
        });

        let renderRow = function(row, index) {
            let innerBlock = null;
            let isUpdating = me.props.isUpdating;
            let inputProps = {
                placeholder: row.placeholder,
                className: 'addressInput',
                onChange: me.onUpdateEntity.bind(me, row.placeholder)   //error?????
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
                    innerBlock = (<div className="center"> <textarea {...inputProps}></textarea></div>);
                    break;
                case 'city':
                case 'street':
                {
                    return (<ListItem key={row.key} tappable onClick={this.onPickerSelected}>
                        <div className="center"> {isUpdating ? row.text : row.placeholder} </div>
                        <div className="right"> 
                            <Icon icon="md-arrow-right" className="list__item__icon"> </Icon>
                        </div>
                    </ListItem>);
                }
            }

            return <ListItem key={row.key}> {innerBlock} </ListItem>
        };

        let listProps = {
            dataSource: dataSource,
            renderRowCallback: renderRow
        };

        let cascadeOptions = [].concat(Utils.getAddressMap('zj'));
        let cascadeCityProps = {
            options: cascadeOptions,
            onChange: this.onPickerSelected,
            style: {
                display: (this.state.showCityPicker? 'block' : 'none')  
            }
        };

        let streets =  [].concat(Utils.getStreetMap('zj-hz-scq'));
        let innerSelectBlock = streets.map((e, i) => <Option value={e.value} key={i}> {e && e.label} </Option>);
        let selectProps = {
            onChange: this.onPickerSelected,
            style: {
                display: (this.state.showStreetPicker? 'block' : 'none')
            }
        };

        return (
            <Page renderToolbar = {() => (<NavToolbar {...navigatorProps}> </NavToolbar>)}>
                {/*address details*/}
                <SimpleList  {...listProps} />
                
                <Button modifer="large quite" style={{'textAlign': 'center'}} onClick={this.onSave}> 保存 </Button>

                {/*city picker*/}
                <Cascader {...cascadeCityProps} />

                {/*street picker
                <Select {...selectProps}> {innerSelectBlock} </Select> not working!!! */}
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
