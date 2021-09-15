import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logon from './pages/Logon';
import RegistrationForm from './pages/User/register';
import Match from './pages/Match';
import Pet from './pages/Pet/register';


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
            <Switch>
                <Route path="/registerPet" exact component={ Pet } />
            </Switch>
        </BrowserRouter>
    );
}
