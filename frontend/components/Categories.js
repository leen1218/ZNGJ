/**
 * Created by Stone on 03/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui'
class Categories extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/

    }

    render() {
        const {} = this.props;
        return (<Page><div>{'This is categories'}</div></Page>);
    }
}

Categories.propTypes = {
 
};

/*
Categories.defaultProps = {
 
};

*/

export default Categories;
