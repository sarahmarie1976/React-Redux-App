import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import rootReducer from './store/reducers';

const store = createStore(rootReducer, applyMiddleware(thunk));

const rootElement = document.getElementById('root');
ReactDOM.render(
	<Provider store={store}>
		<App />,
	</Provider>,
	rootElement,
);


