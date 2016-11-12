/**
 * Created by Stone on 12/11/2016.
 */
import React from 'react';
import Ons from 'react-onsenui';

var MyTab = React.createClass({
    renderToolbar: function() {
        return (
            <Ons.Toolbar>
                <div className='center'>{this.props.title}</div>
            </Ons.Toolbar>
        );
    },

    render: function() {
        return (
            <Ons.Page renderToolbar={this.renderToolbar}>
                <section style={{margin: '16px'}}>
                    <p>
                        This is the <strong>{this.props.title}</strong> tab.
                    </p>
                </section>
            </Ons.Page>
        );
    }
});

var MyPage = React.createClass({
    getInitialState: function() {
        return {
            index: 0
        }
    },
    renderTabs: function() {
        return [
            {
                content: <MyTab title='Home' />,
                tab: <Ons.Tab label='Home' icon='md-home' />
            },
            {
                content: <MyTab title='Settings' />,
                tab: <Ons.Tab label='Settings' icon='md-settings' />
            }
        ];
    },

    render: function() {
        return (
            <Ons.Tabbar
                index={this.state.index}
                onPreChange={(event) =>
          {
            if (event.index != this.state.index) {
              this.setState({index: event.index});
            }
          }
        }
                renderTabs={this.renderTabs}
            />
        );
    }
});


export default MyPage;