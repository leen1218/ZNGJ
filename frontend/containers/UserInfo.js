/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';

class UserInfo extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/

        this.key = 'UserInfo_Key';
    }

    render() {
        const {} = this.props;
        return (<Page><div> {`This is USER INFO page`}</div></Page>);
    }
}

UserInfo.propTypes = {

};

/*
UserInfo.defaultProps = {

};

*/

export default UserInfo;
