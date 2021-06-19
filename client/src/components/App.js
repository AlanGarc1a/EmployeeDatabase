import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Menu from './Menu';
import EmployeeCreate from './employee/EmployeeCreate';


const App = () => {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route path="/create" exact component={EmployeeCreate} />
            </Switch>
        </BrowserRouter>
    )
}

export default App;