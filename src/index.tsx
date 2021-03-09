import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Step3Part from './parts/Step3Part';

ReactDOM.render(
    <Provider store={store}>
      {/*<Step1Part/>*/}
      {/*<Step2Part/>*/}
      <Step3Part/>
    </Provider>
    ,
    document.getElementById('root')
);
