import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import RegistrationForm from './pages/User/register';
import Match from './pages/Match';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Logon } />
            </Switch>
            <Switch>
                <Route path="/register" exact component={ RegistrationForm } />
            </Switch>
            <Switch>
                <Route path="/home" exact component={ Match } />
            </Switch>
        </BrowserRouter>
    );
}
