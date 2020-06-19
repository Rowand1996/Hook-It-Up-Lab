import React, { useState, useEffect, Fragment } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Home from '../components/Home.jsx';
import Posts from './Posts.jsx';

const App = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let res = await fetch("https://jsonplaceholder.typicode.com/users");
        let users = await res.json();
        setUsers(users);
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Fragment>
            <Router>
                <Fragment>
                    <nav className="navbar navbar-info bg-dark">
                        <button type="button" className="btn btn-sm btn-outline-info btn-link"><Link to="/">Go Home</Link></button>
                    </nav>

                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route exact path="/:id/details" component={Posts} />
                    </Switch>
                </Fragment>
            </Router>
        </Fragment>
            
    );
}

export default App;