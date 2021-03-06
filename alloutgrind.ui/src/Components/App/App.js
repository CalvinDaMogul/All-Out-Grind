import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Login from '../Login/Login';
import QuotePage from '../QuotePage/QuotePage';
import AllQuotes from '../AllQuotes/AllQuotes';
import AddQuote from '../AddQuote/AddQuote';
import Jumbotron from '../../Assets/Jumbo.jpg';


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
            <Route exact path="/" component={Home} />
            <Route exact path="/Home" component={Home} path="/Home" />
            <Route exact path="/Login" component={props => <Login {...props} setAuthenticated={this.setAuthenticated}/>} />
              <Route exact component={QuotePage} path="/Quote Page"/>
              <Route component={AllQuotes} path="/All Quotes"/>
              <Route component={AddQuote} path="/Add Quote"/>
            </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;