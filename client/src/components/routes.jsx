import React from 'react';
import { Route, Switch } from 'react-router-dom';
import App from './App.jsx';
import Feed from './components/FeedComponent.jsx';
import Card from './components/MyComponent.jsx';


const Routes = () => (
	<App>
    <Switch>
      <Route exact path="/feed" component={Feed} />
      <Route exact path="/card" component={Card} />
    </Switch>
	</App> 
);

export default Routes;