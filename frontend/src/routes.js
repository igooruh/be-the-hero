import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/logon/logon';
import Register from './pages/register/register';
import Profile from './pages/profile/profile';
import NewIncidents from './pages/newIncidents/new-incidents';

export default function Routes() {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />
                <Route path="/register" component={ Register } />
                <Route path="/profile" component={ Profile } />
                <Route path="/incidents/new" component={ NewIncidents } />
            </Switch>
        </BrowserRouter>
    );
}