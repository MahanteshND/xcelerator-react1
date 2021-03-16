import React from 'react';
import { store } from './redux/store';
import { Provider } from 'react-redux';
import Login from './components/Login';
import DashBoard from './components/DashBoard';
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Login} />
        <Route exact path='/DashBoard' component={DashBoard} />
      </Router>
    </Provider>
  );
}

export default App;