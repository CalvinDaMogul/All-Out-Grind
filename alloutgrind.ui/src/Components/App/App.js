import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import QuotePage from '../QuotePage/QuotePage';
import AllQuotes from '../AllQuotes/AllQuotes';


import './App.scss';


class App extends React.Component {
  state = {
    authenticated: true,
  }

  setAuthenticated = (userId) => {
    this.setState({ authenticated: true });
  }



  render() {
    return (
      <div className="App">
        <Navbar/>
        <BrowserRouter>
            <Switch>
            <Route exact path="/Home" component={Home} path="/Home" />
            <Route exact path="/Login" component={props => <Login {...props} setAuthenticated={this.setAuthenticated}/>} />
              <Route component={QuotePage} path="/Quote Page"/>
              <Route component={AllQuotes} path="/All Quotes"/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;