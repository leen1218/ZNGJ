/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Tabbar, Tab } from 'react-onsenui';
import Home from './Home';
import OrderInfo from '../containers/OrderInfo';
import UserInfo from '../containers/UserInfo';


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
                tab: <Tab label='首页' icon='md-home' key={1}/>
            },

            {
                content: <OrderInfo navigator={this.props.navigator} />,
                tab: <Tab label='订单' icon='md-menu' key={2}/>
            },

            {
                content: <UserInfo navigator={this.props.navigator} />,
                tab: <Tab label='我' icon='md-settings' key={3}/>
            }
        ];
    }

    render() {
        return (
            <Page>
                <Tabbar renderTabs={this.renderTabs} key={'TAB_KEY'}> </Tabbar>
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
