import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Step2Part from './parts/Step2Part';

ReactDOM.render(
    <Provider store={store}>
      {/*<Step1Part/>*/}
      <Step2Part/>
    </Provider>
    ,
    document.getElementById('root')
);
