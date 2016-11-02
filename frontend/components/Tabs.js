/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';
import Home from './Home';
import OrderInfo from './OrderInfo';
import UserInfo from './UserInfo';


class Tabs extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.renderTabs = this.renderTabs.bind(this);
    }

    renderTabs() {
        return [
            {
                content: <Home navigator={this.props.navigator} />,
                tab: <Tab label='首页' icon='md-home' />
            },

            {
                content: <OrderInfo navigator={this.props.navigator} />,
                tab: <Tab label='订单' icon='md-menu' />
            },

            {
                content: <UserInfo navigator={this.props.navigator} />,
                tab: <Tab label='我' icon='md-settings' />
            }
        ];
    }

    render() {
        return (
            <Page>
                <Tabbar renderTabs = {this.renderTabs}> </Tabbar>
            </Page>
        );
    }
}

Tabs.propTypes = {

};

/*
Tabs.defaultProps = {

};

*/

export default Tabs;
