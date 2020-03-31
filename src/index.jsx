import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import reducers from './reducers/index';
import App from './components/App';

const store = configureStore({ reducer: reducers });

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
