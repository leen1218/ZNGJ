/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, List, ListItem, Icon } from 'react-onsenui';

class Home extends  React.Component {

    
    constructor(props) {
        super(props);
        /*this.state = { };*/

        this.dataSource = [
            {icon: 'md-face', title: '我要保修', sub: '各大品牌各种型号家电维修'},
            {icon: 'md-face', title: '成为会员', sub: '享受VIP服务'},            //todo FIXME ICON
            {icon: 'md-face', title: '扩展服务', sub: '其他业务扩展'}
        ];
        this.Key = 'HOME_KEY';
        this.onRowClicked = this.onRowClicked.bind(this);
    }

    onRowClicked(row, index) {

        const { navigator } = this.props;
        if (navigator) {
            console.log(row);
            //navigator.pushPage();
        }
    } 
    
    
    render() {
        return (
            <Page>
                {/* carousel */}
                <div style = {{height: '30%', background: 'red'}}> {'This is carousal container'} </div>

                {/* Link Lists */}
                <List dataSource = {this.dataSource}
                    renderRow = {(row, index) => (
                    <ListItem key = {index}> 
                        <div className="left">
                            <Icon icon={row.icon} className="list__item__icon"  size={50} />
                        </div>
 
                          <div className="center">
                            <span className="list__item__title">{row.title}</span>
                            <span className="list__item__subtitle">{row.sub}</span>
                          </div>

                    </ListItem>)}
                    tappable
                    onClick = {this.onRowClicked}
                >
                </List>



            </Page>);
    }
}

Home.propTypes = {

};

/*
Home.defaultProps = {

};

*/

export default Home;

