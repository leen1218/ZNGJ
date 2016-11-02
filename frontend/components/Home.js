/**
 * Created by Stone on 01/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, List, ListItem } from 'react-onsenui';

class Home extends  React.Component {

    
    constructor(props) {
        super(props);
        /*this.state = { };*/

        this.dataSource = [1, 2, 3];
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
                    renderRow = {(row, index) => <ListItem key = {index}> {row}</ListItem>}
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

