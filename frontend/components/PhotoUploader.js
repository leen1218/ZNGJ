/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
class PhotoUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = { photoList: []};  //todo FIXME, put this to store.
    }

    render() {
        const {} = this.props;
        return (<div>{'Photo page'}</div>);
    }
}

PhotoUploader.propTypes = {
 
};

/*
PhotoUploader.defaultProps = {
 
};

*/

export default PhotoUploader;
