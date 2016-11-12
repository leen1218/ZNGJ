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
            {icon: 'md-face',  title: '冰箱'},
            {icon: 'md-face',  title: '电视机'},            //todo FIXME ICON
            {icon: 'md-face',  title: '微波炉'},
            {icon: 'md-face',  title: '空调'}
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

        const navigatorProps = {
            hasBackButton: true,
            navigator: navigator,
            title: '维修大类'
        };

        return (
            <Page renderToolbar = {() => (<NavToolbar {...navigatorProps}> </NavToolbar>)}>
                <SimpleList  {...listProps} />
            </Page>
        );
    }
}

Categories.propTypes = {
    
    
    
};

/*
SimpleCategories.defaultProps = {
 
};

*/

export default Categories;




