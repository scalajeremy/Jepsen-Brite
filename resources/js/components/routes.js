import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from './homepage';
import Events from './events';
import Eventsolo from './event';
import AddNewEvent from './addnewevent';
import EditAnEvent from './editanevent';
import DeleteAnEvent from './deleteanevent';
import PastEvents from './pastevents';
import Register from './register';
import Login from './login';
import Logout from './logout';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={Homepage} />
    <Route exact path="/events/page=:page" component={Events} />
    <Route exact path="/event/:id" component={Eventsolo} />
    <Route exact path="/addnewevent" component={AddNewEvent} />
    <Route exact path="/editanevent/:id" component={EditAnEvent} />
    <Route exact path="/deleteanevent/:id" component={DeleteAnEvent} />

    <Route exact path="/pastevents/page=:page" component={PastEvents} />


    <Route exact path="/register" component={Register} />
    <Route exact path="/login" component={Login} />
    <Route exact path="/logout" component={Logout} />
  </Switch>
)

export default Routes
