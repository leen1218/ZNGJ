/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';

class ProblemReport extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        const {} = this.props;
        return (<Page> <div> {'this is problem report page'} </div></Page>);
    }
}

ProblemReport.propTypes = {
 
};

const mapStateToProps = (state, ownProps) => {
     return null;
};
/*
const mapDispatchToProps = (dispatch, ownProps) => {
     return null;
};

ProblemReport = connect(mapStateToProps, mapDispatchToProps)($B);
*/
export default ProblemReport;

