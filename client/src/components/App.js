import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import EmployeeCreate from './employee/EmployeeCreate';
import EmployeeView from './employee/EmployeeView';
import EmployeeEdit from './employee/EmployeeEdit';
import Home from './Home';

const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create" exact component={EmployeeCreate} />
                <Route path="/employee/:id" exact component={EmployeeView} />
                <Route path="/edit/:id" exact component={EmployeeEdit} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;