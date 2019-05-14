import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

import Navigation from './Navigation.jsx';

const About = () => {
  return(
    <div>
      <p>About</p>
    </div>
  );
};

const Home = () => {
  return(
    <div>
      <p>Home!</p>
    </div>
  );
};

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      abilities: ['Access to state', 'Utilize components', 'Use FontAwesome and SASS']
    }
  }

  render() {
    return (
      <div className="main">

        <BrowserRouter>
          <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Home} exact />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </BrowserRouter>    
      </div>
    )
  }
}