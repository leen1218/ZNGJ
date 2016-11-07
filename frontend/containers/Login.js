/**
 * Created by Stone on 06/11/2016.
 */

import React, { PropTypes } from 'react';
import { Page, Button, Toolbar, Icon, Input, ToolbarButton, Row } from 'react-onsenui';
import ons from 'onsenui';

//css
import '../styles/css/login.css';

class Login extends  React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };

        this.signIn = this.signIn.bind(this);
        this.forgotPassword = this.forgotPassword.bind(this);
        this.emailChange = this.emailChange.bind(this);
        this.passwordChange = this.passwordChange.bind(this);
    }

    signIn() {    //todo Fixme, not implemented yet.
        ons.notification.alert({message: `You entered '${this.state.email}' & '${this.state.password}' `});
    }

    forgotPassword() {
        ons.notification.prompt({
            message: 'What is your email?',
            callback: function(email) {
                ons.notification.alert({
                    message: 'The new password will be send to ' + email
                });
            }
        });
    }

    emailChange(event) {
        this.setState({
            email: event.target.value
        });
    }

    passwordChange(event) {
        this.setState({
            password: event.target.value
        });
    }

    render() {

        let toolbarButton;

        if (!ons.platform.isAndroid()) {
            toolbarButton = <ToolbarButton onClick={this.signIn}>
                <Icon icon={{default: 'ion-log-in'}} />
            </ToolbarButton>;
        }

        const renderToolbar = () =>
            (<Toolbar>
                <div className="center">Login</div>
                <div className="right">
                    {toolbarButton}
                </div>
            </Toolbar>);

        return (
            <div class="tile">
                <Page id="login" renderToolbar={renderToolbar}>
                    <Input value={this.state.email} onChange={this.emailChange} placeholder="手机号" type="text" modifier="underbar" float />
                    <Input value={this.state.password} onChange={this.passwordChange} placeholder="密码" type="password" modifier="underbar" float />
                    <Button id='signIn' onClick={this.signIn} modifier="large">登录</Button>
                    <Button id='forgetBtn'  onClick={this.forgotPassword} modifier="quiet">忘记密码?</Button>
                </Page>
            </div>
        );

    }
}

Login.propTypes = {

};

/*
Login.defaultProps = {

};

*/

export default Login;
