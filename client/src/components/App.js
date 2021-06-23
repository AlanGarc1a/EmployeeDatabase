import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import EmployeeCreate from './employee/EmployeeCreate';
import Home from './Home';

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" exact component={EmployeeCreate} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;