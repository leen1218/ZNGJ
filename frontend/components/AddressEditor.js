/**
 * Created by Stone on 13/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, ListItem, Input, Icon } from 'react-onsenui';
import SimpleList from './SimpleList';
import NavToolbar from './NavToolbar';
import Cascader from 'antd/lib/cascader';
import Select from 'antd/lib/select';
import ons from 'onsenui';

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

//todo FIXME: performance concern, we always update the state once there is change on controls

class AddressEditor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showCityPicker: false,
            showStreetPicker: false,

            name: '',    //[discussion], we make the state flat. should we group them under something like 'addressinfo'
            phone: '',
            postCode: '',
            address: '',
            city: '',
            street: ''
        };

        this.onSave=this.onSave.bind(this);
        this.onPickerSelected=this.onPickerSelected.bind(this);
        this.onUpdateCity=this.onUpdateCity.bind(this);
        this.onUpdateStreet=this.onUpdateStreet.bind(this);
    }

    onSave(evt) {
        //todo impl checking logic.
        console.log(this.state);

        const { updateCallback } = this.props;
        if (updateCallback) {
            updateCallback();
        }
    }

    onPickerSelected(code) {
        switch (code) {
            case 'city':
                this.setState({showCityPicker: true, showStreetPicker: false});
                break;
            case 'street':
                if (this.state.city.length) {
                    this.setState({showCityPicker: false, showStreetPicker: true});
                } else {
                    ons.notification.alert('请先选择城市信息', {title: '提醒', 'buttonLabel': '确认'});
                }
                break;
            default:
                console.log('error: 0001');
                break;
        }
    }

    onUpdateCity(value) {
        console.log(value);
        if (Array.isArray(value) && value) {
            let cityValue = value.join('/');
            this.setState({city: cityValue});
        }
    }

    onUpdateStreet(value) {
        console.log(value);
        if (value) {
            this.setState({street: value});
        }
    }

    onUpdateEntity(name, evt) {
        console.log(name);
        console.log(evt);

        let value = null;
        let newInfo = null;

        if (name === 'address')  //a text area.
        {
            value = this.textArea.value;
        } else {
            if (evt && evt.srcElement) {
                value = evt.srcElement.value;
            }
        }

        if (value !== null) {
            //newInfo = Object.assign({}, this.state);
            newInfo = {};
            newInfo[name] = value;
            this.setState(newInfo);
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
                onChange: me.onUpdateEntity.bind(me, row.key)
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
                    innerBlock = (<div className="center"> <textarea ref={(textArea) => me.textArea = textArea} {...inputProps}></textarea></div>);
                    break;
                case 'city':
                case 'street':
                {
                    return (
                        <ListItem key={row.key} tappable onClick={() => me.onPickerSelected(row.key)}>
                            <div className="center"> {isUpdating ? row.text : row.placeholder} </div>
                            <div className="right">
                                <Icon icon="md-arrow-right" className="list__item__icon"> </Icon>
                            </div>
                        </ListItem>
                    );
                }
            }

            return <ListItem key={row.key}> {innerBlock} </ListItem>
        };

        let listProps = {
            dataSource: dataSource,
            renderRowCallback: renderRow
        };

        //city information
        let cascadeOptions = [].concat(Utils.getAddressMap('zj'));
        let cascadeCityProps = {
            options: cascadeOptions,
            onChange: this.onUpdateCity,
            size: 'large',
            placeholder: '请选择省、市、区信息',
            style: {
                display: (this.state.showCityPicker? 'block' : 'none')  
            }
        };

        //streets information.
        let streets =  [].concat(Utils.getStreetMap('zj-hz-scq'));
        let innerSelectBlock = streets.map(
            function(e, i) {
                //console.log(e);
                return (<Select.Option value={e.value} key={i}> {e.label} </Select.Option>);
        });
        let selectProps = {
            onChange: this.onUpdateStreet,
            size: 'large',
            placeholder: '请选择街道信息',
            style: {
                display: (this.state.showStreetPicker? 'block' : 'none')
            }
        };

        return (
            <Page renderToolbar = {() => (<NavToolbar {...navigatorProps}> </NavToolbar>)}>
                {/*address details*/}
                <SimpleList  {...listProps} />
                
                <Button modifier="large quite" style={{'textAlign': 'center'}} onClick={this.onSave}> 保存 </Button>

                {/*city picker*/}
                <Cascader {...cascadeCityProps} />

                {/*street picker*/}
                <Select {...selectProps}>
                    { innerSelectBlock }
                </Select>
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
