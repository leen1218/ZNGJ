/**
 * Created by Stone on 08/11/2016.
 */

import React, { PropTypes } from 'react';
import SimpleList from '../components/SimpleList';
import { ListItem } from 'react-onsenui';


function hFakePriceTags() {
    this.setState({priceTags: [
        {name: 'a', price: 101},
        {name: 'b', price: 102},
        {name: 'd', price: 103},
        {name: 'c', price: 104}
    ]});
}

class PriceTags extends React.Component {

    constructor(props) {
        super(props);
        this.state = { priceTags: [{name: 'a', price: 100}]}; //todo FIXME, get price tags from store.
    }

    componentDidMount() {
        hFakePriceTags.call(this);
    }

    render() {
        let renderRow = (row, index) => {
            return (
                <ListItem key={index}>
                    <div className="left"> {row.name} </div>
                    <div className="right"> {row.price} </div>
                </ListItem>
            );
        };

        let listProps = {
            renderRowCallback: renderRow,
            dataSource: this.state.priceTags,
            header: '参考价格'
        };

        return (
            <div className="PriceTag">
                <SimpleList  {...listProps} />
            </div>
        );
    }
}

PriceTags.propTypes = {
 
};

/*
PriceTags.defaultProps = {
 
};

*/

export default PriceTags;
