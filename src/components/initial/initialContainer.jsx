import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import store from '../../redux/store';
import InitialCompose from './initial';

const InitialContainer = () => {
    return(
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Provider store={store}>
                  <InitialCompose />
            </Provider>
        </HashRouter>
    )
}

export default InitialContainer;