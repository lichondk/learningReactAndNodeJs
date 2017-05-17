import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ReduxPromise from 'redux-promise';


import App from './components/app';
import ErrorPage from './components/error_page';
import Nav from './components/navbar';
import reducers from './reducers';
import Contact from './containers/contact';
import DashBoard from './containers/dashboard';
import PostHairdresser from './containers/create_hairdresser';



const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore,   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <switch>
          <Route path="/error" component={ErrorPage} />
           <Route path="/nav/nav" component={ErrorPage} />
            <Route path="/contact" component={Contact} />
            <Route path="/dashboard" component={DashBoard} />
            <Route path="/create/hairdresser" component={PostHairdresser} />
           <Route path="/home" component={App} />
        </switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
