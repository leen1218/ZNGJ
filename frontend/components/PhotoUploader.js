/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
//import Modal from 'antd/lib/modal';

import 'antd/lib/upload/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/modal/style/css';


class PhotoUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: ''
        };  //todo FIXME, put this to store.

        this.handleCancel = this.handleCancel.bind(this);
    }

    handleCancel() {
        this.setState({
            previewVisible: false,
        });
    }

    render() {
        const {} = this.props;

        const props = {
            //action: '/upload.do',
            listType: 'picture-card',
            defaultFileList: [
                /*{
                uid: -1,
                name: 'xxx.png',
                status: 'done',
                url: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
                thumbUrl: 'https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png',
            }*/
            ],

            onPreview: (file) => {
                this.setState({
                    previewImage: file.url,
                    previewVisible: true,
                });
            }
        };

        return (
            (
            <div className="clearfix">
                <Upload {...props}>
                    <Icon type="plus" />
                    <div className="ant-upload-text">长按此处上传图片</div>
                </Upload>
            </div>
        ));
    }
}

PhotoUploader.propTypes = {
 
};

/*
PhotoUploader.defaultProps = {
 
};


 {/*<a href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" rel="noopener noreferrer" className="upload-example">
 <img alt="example" src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
 <span>sample</span>
 </a>
 <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
 <img alt="example" src={this.state.previewImage} />
 </Modal>*}


*/

export default PhotoUploader;
