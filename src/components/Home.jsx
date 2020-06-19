import React, { useState, useEffect, Fragment } from 'react';
import {Link} from 'react-router-dom';

const Home = () => {

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
        <div className="container">
            <h1>Users:</h1>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {users.map(user => (
                            <li key={user.id} className="list-group-item"><Link to={`/${user.id}/details`}>{user.name}</Link></li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Home;