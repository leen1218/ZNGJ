/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';

class Home extends  React.Component {

    
    constructor(props) {
        super(props);
        /*this.state = { };*/

    }

    render() {
        const {} = this.props;
        return (
            <Page>
                <div> {'This is Home Page'} </div>
            </Page>);
    }
}

Home.propTypes = {

};

/*
Home.defaultProps = {

};

*/

export default Home;

