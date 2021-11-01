import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/fontawesome/css/all.css";
import {BrowserRouter} from "react-router-dom";
import "./assets/styles/detistDashboard.css";
import "./assets/styles/managerDashboard.css";
import "./assets/styles/main.css";
import "./assets/styles/custom.css";
import "./assets/styles/detistAppointments.scss"
import App from "./App";
import {Provider} from "react-redux";
import { applyMiddleware, compose, createStore } from 'redux';
import reportWebVitals from './reportWebVitals';
import { requestMiddleware } from './helpers/redux-request';
import reducer from './store/reducers/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancers(applyMiddleware(requestMiddleware)),
);

 requestMiddleware.on.fail = ((err) => {
    if (err.response) {
        return err.response;
    }
    throw err;
});
ReactDOM.render(
    <BrowserRouter>
  <React.StrictMode>
      <Provider store={store}>
   <App/>
  </Provider>
  </React.StrictMode>
 </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
