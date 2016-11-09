/**
 * Created by Stone on 04/11/2016.
 */

import { Icon, List, ListItem, ListHeader } from 'react-onsenui';

import React, { PropTypes } from 'react';
class SimpleList extends  React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/
        this.renderRow = this.renderRow.bind(this);
        this.renderHeader = this.renderHeader.bind(this);
    }

    renderRow(row, index) {

        let iconBlock = null;
        let descriptionBlock = null;

        if (row.icon) {
            iconBlock =(
                <div className="left">
                    {row.iconSize
                        ? (<Icon icon={row.icon} className="list__item__icon" size={row.iconSize}/>)
                        : (<Icon icon={row.icon} className="list__item__icon" />)
                    }
                </div>
            );
        }

        if (row.title || row.desc) {
            descriptionBlock = (
                <div className="center">
                    <span className="list__item__title">{row.title || row.desc}</span>
                    {row.sub ? (<span className="list__item__subtitle">{row.sub}</span>) : null}
                </div>

            );
        }

        const { clickCallback } = this.props;

        if (clickCallback && typeof clickCallback == 'function')  {
            return (
                <ListItem key = {index} id = {index} tappable onClick={() =>clickCallback(index)}>
                    {iconBlock}
                    {descriptionBlock}
                </ListItem>
            );
        }
        else {
            return (
                <ListItem key = {index} id = {index}>
                    {iconBlock}
                    {descriptionBlock}
                </ListItem>
            );

        }
    }

    renderHeader() {

        const { header } = this.props;
        if (header && header.length) {
            return <ListHeader> {header} </ListHeader>
        }

        return null;
    }

    render() {
        const { dataSource, renderRowCallback, styles } = this.props;

        return (
            <List dataSource={dataSource} renderRow={renderRowCallback || this.renderRow} renderHeader={this.renderHeader}>
            </List>
        );
    }
}

SimpleList.propTypes = {
 
};

/*
SimpleList.defaultProps = {
 
};

*/

export default SimpleList;
