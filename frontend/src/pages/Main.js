import React, { useEffect, useState } from 'react';
import './Main.css';

import api from '../services/api';

import logo from '../img/logo.svg';
import like from '../img/like.svg';
import dislike from '../img/dislike.svg';

export default function Main({ match }){
    const [users, setUsers] = useState([]);
    useEffect(() => {
        async function loadUsers(){
            const response = await api.get('/devs', {
                headers: {
                    user: match.params.id,
                }
            })

            setUsers(response.data);
        }
        loadUsers();
    }, [match.params.id]);

    async function handleDislike(id){
        console.log('dislike', id)
    };

    async function handleLike(id){
        console.log('like', id)
    };

    return (
        <div className="main-container">
            <img src={logo} alt="logo do tindev"/>
            <ul>
                {users.map(user => (
                    <li key={ user._id }>
                        <img src={user.avatar} alt={user.name} />
                        <footer>
                            <strong>{user.name}</strong>
                            <p>{user.bio}</p>
                        </footer>

                        <div className="buttons">
                            <button type="button" onClick = {() => handleDislike(user._id)}> 
                                <img src={dislike} alt="dislike"/>
                            </button>
                            <button type="button" onClick = {() => handleLike(user._id)}>
                                <img src={like} alt="like"/>
                            </button>
                        </div>

                    </li>
                ))}                
            </ul>
        </div>
    )
}