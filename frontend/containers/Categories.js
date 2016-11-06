/**
 * Created by Stone on 03/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Toolbar } from 'react-onsenui';
import NavToolbar from '../components/NavToolbar';
import SimpleList from '../components/SimpleList';
import SubCateogries from './SubCateogories';

function gotoSubcategory(sub) {
    const { navigator } = this.props;
    if (sub && navigator) {
        //todo FIXME get subCategories through store.
        navigator.pushPage({component: sub});
    }
}

class Categories extends React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/         //todo FIXME get category list from store.
        this.dataSource = [
            {icon: 'md-face',  title: '冰箱',  next: SubCateogries},
            {icon: 'md-face',  title: '电视机',  next: SubCateogries},            //todo FIXME ICON and NEXT
            {icon: 'md-face',  title: '微波炉',  next: SubCateogries},
            {icon: 'md-face',  title: '空调',  next: SubCateogries}
        ];

        this.onItemSelected = this.onItemSelected.bind(this);
    }

    onItemSelected(evt) {
        //todo FIXME, get subCategories from store.
        gotoSubcategory.call(this, SubCateogries);
    }


    render() {
        const {navigator} = this.props;
        const listProps = {
            dataSource: this.dataSource,
            clickCallback: this.onItemSelected
        };
        return (
            <Page renderToolbar = {() => (<NavToolbar hasBackButton={true} navigator={navigator}> </NavToolbar>)}>
                <SimpleList  {...listProps} />
            </Page>
        );
    }
}

Categories.propTypes = {
    
    
    
};

/*
Categories.defaultProps = {
 
};

*/

export default Categories;




