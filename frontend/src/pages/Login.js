import React, { useState } from 'react';
import '../pages/Login.css';

import api from '../services/api';

import logo from '../img/logo.svg';

export default function Login({ history }){
    const [username, setUsername] = useState('');

    async function handleSubmit(e){
        e.preventDefault();

        const response = await api.post('/devs', {
            username: username,
        });

        const { _id } = response.data;

        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit = {handleSubmit} >
                <img src={logo} alt="logo do tindev"/>
                <input 
                    placeholder="Digite seu usuário do GitHub"
                    value = {username}
                    onChange = {e => setUsername(e.target.value)}
                />
                <button>Enviar</button>
            </form>
        </div>
    );
}

