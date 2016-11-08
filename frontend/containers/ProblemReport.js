/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';
import PhotoUploader from '../components/PhotoUploader';
import NavToolbar from '../components/NavToolbar';
import OrderConfirmation from './OrderConfirmation';


class ProblemReport extends React.Component {

    constructor(props) {
        super(props)
    }

    gotoDetails() {

    }

    render() {
        const {} = this.props;
        return (
            <Page>
                {/*Photos*/}
                <div className="photoTaker">
                </div>

                {/*user address*/}
                

                {/*service date*/}
                
            </Page>
        );
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

