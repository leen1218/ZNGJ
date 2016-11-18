/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import Upload from 'antd/lib/upload';
import Icon from 'antd/lib/icon';
import Modal from 'antd/lib/modal';

import 'antd/lib/upload/style/css';
import 'antd/lib/icon/style/css';
import 'antd/lib/modal/style/css';
import '../styles/css/_PhotoUploader.css';


//see reference:  https://ant.design/components/upload/#components-upload-demo-fileList
class PhotoUploader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: []
        };  //todo FIXME, put this to store.

        this.handleCancel = this.handleCancel.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(info) {
        let fileList = info.fileList;

        // 1. Limit the number of uploaded files
        //    Only to show two recent uploaded files, and old ones will be replaced by the new
        fileList = fileList.slice(-2);
        /*
         // 2. read from response and show file link
         fileList = fileList.map((file) => {
         if (file.response) {
         // Component will show file.url as link
         file.url = file.response.url;
         }
         return file;
         });

         // 3. filter successfully uploaded files according to response from server
         fileList = fileList.filter((file) => {
         if (file.response) {
         return file.response.status === 'success';
         }
         return true;
         });
         */
        this.setState({fileList});
    }


    handleCancel() {
        this.setState({ previewVisible: false });
    }

    render() {
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
                    previewVisible: true
                });
            },

            onChange: this.handleChange,
            multiple: true
        };

        return (
            (
            <div className="clearfix">
                <Upload {...props} fileList={this.state.fileList}>
                    <Icon type="plus" />
                    <div className="ant-upload-text">长按此处上传图片</div>
                </Upload>

                <Modal visible={this.state.previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" src={this.state.previewImage} />
                </Modal>
            </div>
        ));
    }
}

PhotoUploader.propTypes = {
 
};

/*
PhotoUploader.defaultProps = {
 
};


 <a href="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" target="_blank" rel="noopener noreferrer" className="upload-example">
 <img alt="example" src="https://os.alipayobjects.com/rmsportal/NDbkJhpzmLxtPhB.png" />
 <span>sample</span>
 </a>


*/

export default PhotoUploader;
