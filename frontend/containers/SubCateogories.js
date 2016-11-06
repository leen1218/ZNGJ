/**
 * Created by Stone on 03/11/2016.
 */
import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';
class SubCateogories extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
    }

    render() {
        const {} = this.props;
        return (<Page> <div>{'Subcategories page'}</div></Page>);
    }
}

SubCateogories.propTypes = {

};

/*
SubCateogories.defaultProps = {

};

*/

export default SubCateogories;
