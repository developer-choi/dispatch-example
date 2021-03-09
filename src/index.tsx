import React from 'react';
import ReactDOM from 'react-dom';
import Step1Part from './parts/Step1Part';
import {Provider} from 'react-redux';
import {store} from './store/store';

ReactDOM.render(
    <Provider store={store}>
      <Step1Part/>
    </Provider>
    ,
    document.getElementById('root')
);
