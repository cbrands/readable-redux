import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import { loadCategories } from './actions'
import { BrowserRouter } from 'react-router-dom'

const store = createStore(rootReducer, applyMiddleware(thunk));
//const store = createStore(rootReducer);
console.log('store.getState()', store.getState());
store.subscribe(() => console.log('store', store.getState()));
//store.dispatch(loadCategories())

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root')
);
