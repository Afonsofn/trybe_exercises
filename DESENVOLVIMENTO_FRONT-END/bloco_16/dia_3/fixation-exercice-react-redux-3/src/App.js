import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store'
import Home from './components/Home'
import Clients from './components/Clients'
import LogInPage from './components/LogInPage'
import SignUpPage from './components/SignUpPage'

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route path="/Clients" component={Clients} />
            <Route path="/LogInPage" component={LogInPage} />
            <Route path="/SignUpPage" component={SignUpPage} />
            <Route exact path="/" component={Home} />        
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;