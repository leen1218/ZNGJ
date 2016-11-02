import React, { PropTypes } from 'react';
import { Navigator, Page } from 'react-onsenui';
import Tabs from './Tabs';

class CustomerApp extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.renderPage = this.renderPage.bind(this);
    }

    renderPage(route, navigator) {
        route.props = route.props || {};
        route.props.navigator = navigator;

        return (<route.component {...route.props} />);
    }

    render() {
        return (
        <Navigator
            renderPage={this.renderPage}
            initialRoute={{component: Tabs}}
        />
        );
    }
}

CustomerApp.propTypes = {

};

/*
CustomerApp.defaultProps = {

};

*/

export default CustomerApp;
