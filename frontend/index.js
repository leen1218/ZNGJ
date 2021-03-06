import React from 'react';
import {render} from 'react-dom';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import {AppContainer} from 'react-hot-loader';

import rootReducer from './reducers';
import CustomerApp from './components/CustomerApp';
import InitialStore from  './api/Settings';

// import './icons/css/weather-icons.css';

import ons from 'onsenui';
import 'onsenui/css/onsenui.css';
import './styles/stylus/index.styl';
import apiMiddleware from './api';

const logger = createLogger();

const store = createStore(rootReducer,
  //window.devToolsExtension ? window.devToolsExtension() : f => f,
    InitialStore,
    process.env.NODE_ENV === 'production'
    ? applyMiddleware(thunk, apiMiddleware)
    : applyMiddleware(thunk, apiMiddleware, logger)
);

//test code
// import {Applicances} from './api/API';
// store.dispatch(Applicances.getAll());
//test ends;


const rootElement = document.getElementById('root');
let isEngineer = false;
let App = isEngineer ? (<div> under construction </div>) : (<CustomerApp />)

ons.ready(() => render(
  <AppContainer>
    <Provider store={store}>
        {App}
    </Provider>
  </AppContainer>,
  rootElement
));

if (module.hot) {
  let appPath = isEngineer ? '' : './components/CustomerApp';

  module.hot.accept(appPath, () => {
    const NextApp = isEngineer ?
        require('./components/CustomerApp').default      //todo FIXME!
        : require('./components/CustomerApp').default;
    render(
      <AppContainer>
        <Provider store={store}>
          <NextApp />
        </Provider>
      </AppContainer>,
      rootElement
    );
  });
}
