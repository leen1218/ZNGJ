/**
 * Created by Stone on 03/11/2016.
 */
import React, { PropTypes } from 'react';
import { Page } from 'react-onsenui';
import SimpleList from '../components/SimpleList';
import NavToolbar from '../components/NavToolbar';
import Login from './Login';
import ProblemReport from './ProblemReport';


class SubCateogories extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.dataSource = [
            {icon: 'md-face',  title: 'A'},
            {icon: 'md-face',  title: 'B'},            //todo FIXME ICON and NEXT
            {icon: 'md-face',  title: 'C'},
            {icon: 'md-face',  title: 'D'}
        ];
        this.gotoNext = this.gotoNext.bind(this);
        this.onItemClicked = this.onItemClicked.bind(this);
    }

    gotoNext(next) {
        const { navigator } = this.props;
        if (next && navigator) {
            navigator.pushPage({component: next});
        }
    }

    onItemClicked(evt) {
        let alreadyLogin = false;
        if (alreadyLogin)  {
            this.gotoNext(ProblemReport);
        } else {
            this.gotoNext(Login);
        }
    }

    render() {
        const { navigator } = this.props;
        const listProps = {
            dataSource: this.dataSource,
            clickCallback: this.onItemClicked
        };

        return (
            <Page renderToolbar = {() => (<NavToolbar hasBackButton={true} navigator={navigator}> </NavToolbar>)}>
                <SimpleList  {...listProps} />
            </Page>
        );
    }
}

SubCateogories.propTypes = {

};

/*
SubCateogories.defaultProps = {

};

*/

export default SubCateogories;
