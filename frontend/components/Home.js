/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, List, ListItem, Icon } from 'react-onsenui';
import Categories  from '../containers/Categories';
import Login from '../containers/Login';

class Home extends  React.Component {

    
    constructor(props) {
        super(props);
        /*this.state = { };*/

        //todo FIXME ICON and NEXT, not 'next' can vary depends on if user is logged in or not.
        this.dataSource = [
            {icon: 'md-face', title: '我要报修', sub: '各大品牌各种型号家电维修', next: Categories},
            {icon: 'md-face', title: '成为会员', sub: '享受VIP服务', next: Login},
            {icon: 'md-face', title: '扩展服务', sub: '其他业务扩展', next: Categories}
        ];

        this.Key = 'HOME_KEY';
    }

    onRowClicked(nextPage) {
        const { navigator } = this.props;
        if (navigator) {
            console.log(nextPage);
            navigator.pushPage({component: nextPage});
        }
    } 

    render() {
            let renderRowCallback = (row, index) => (
            <ListItem key={index} onClick={this.onRowClicked.bind(this, row.next)} tappable>
                <div className="left">
                    <Icon icon={row.icon} className="list__item__icon"  size={50} />
                </div>

                <div className="center">
                    <span className="list__item__title">{row.title}</span>
                    <span className="list__item__subtitle">{row.sub}</span>
                </div>
            </ListItem>);



        return (

            <Page>
                {/* carousel */}
                <div style={{height: '30%', background: 'red'}}> {'This is carousal container'} </div>

                {/* Link Lists */}
            </Page>);
    }
}

Home.propTypes = {

};

/*
Home.defaultProps = {

 <List dataSource={this.dataSource}  renderRow={renderRowCallback.bind(this)}>
 </List>


};

*/

export default Home;

