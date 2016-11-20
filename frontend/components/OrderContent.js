/**
 * Created by Stone on 18/11/2016.
 */
import React, { PropTypes } from 'react';
import ons from 'onsenui';
import '../styles/css/_OrderContent.css';


class OrderContent extends React.Component {

    constructor(props) {
        super(props);
        /*this.state = { };*/

    }

    /**
     * Map props to a data source used by simple list.
    buildDataSource(props) {
        if (!props) return [];

        let { user, time, items} = props;
        let result = [];

        if (user) {
            result.push(Object.assign({}, user, {key: 'userInfo'}));
        }

        if (items) {
            result.push({
                key: 'items',
                items: [].concat(items)
            });
        }
    }
     * */


    render() {
        let {navigator, user, time, items} = this.props;
        if (!user || !time) {
            let errorMsg = !time ? '时间预约丢失' : '用户信息丢失';
            let alertOptions = {
                title: '错误',
                buttonLabel: '确认',
                callback: function () {
                    navigator && navigator.popPage();
                }
            };

            ons.notification.alert(errorMsg, alertOptions);
        } else {
            return (
                <div className="orderContent pageWrapper">
                    {/*user info*/}
                    {user &&
                    <section className="sink clearFix" key="user">
                        <div className="row-content">
                            <div className="left">
                                联系人: <span> {user.name} </span>
                            </div>

                            <div className="right">
                                {user.phone}
                            </div>
                        </div>

                        <div className="row-content">
                            <p>{user.address}</p>
                        </div>

                    </section>
                    }

                    {/*order placement time*/}
                    {time &&
                    <section className="sink clearFix" key="time">
                        <div className="row-content">
                            <div className="left">
                                预约时间: <span> {time} </span>
                            </div>
                        </div>
                    </section>
                    }

                    {/*items*/}
                    {items &&
                    <section className="sink clearFix" key="items">
                        <div> 订单详情</div>
                        {items.map((element,index) => (
                            <div className="row-content clearFix" key={index}>
                                <div className="left"> {element.title} </div>
                                <div className="right"> {element.desc} </div>
                            </div>
                        ))}
                    </section>
                    }
                </div>
            );
        }
    }
}

OrderContent.propTypes = {
    // navigator: PropTypes.object.isRequired,
    // user: PropTypes.object.isRequired,
    // time: PropTypes.string.isRequired
    //
};

/*
OrderContent.defaultProps = {

};

*/

export default OrderContent;
