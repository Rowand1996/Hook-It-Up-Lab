import React, { useState, useEffect, Fragment } from 'react';

const Posts = (props) => {

    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState([]);
    const getPosts = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${props.match.params.id}`);
        let posts = await res.json();
        setPosts(posts);
    }

    const getUser = async () => {
        let res = await fetch(`https://jsonplaceholder.typicode.com/users/${props.match.params.id}`);
        let user = await res.json();
        console.log(user);
        setUser(user);
    }

    useEffect(() => {
        getPosts();
        getUser();
    }, []);

    return (
        <div className="container">
            <h1>Posts For : {user.name} ({user.username})</h1>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {posts.map(post => (
                            <li key={post.id} className="list-group-item">{post.id} - {post.body}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div >
    );
}

export default Posts;