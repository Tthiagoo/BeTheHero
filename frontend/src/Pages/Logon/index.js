import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'; // link é o componente para criar as rotas
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api';

import './styles.css'

import logoImg from '../../Assets/logo.svg';
import heroesImg from '../../Assets/heroes.png'

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory(); //leva o usuario para uma pagina

    async function handleLogin(e) {
        e.preventDefault();

        try {
            const response = await api.post('sessions', { id }); //pega o id do usuario atraves do metodo post do axios

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch (err) {
            alert('Falha no login, tente novamente.');
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be The Hero" />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>

                    <input
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} //o parametro "e" ve as mudanças no campo pegando o valor
                    />

                    <button className="button" type="submit">Entrar</button>

                    <Link className="back-link" to="/register">
                        <FiLogIn size={16} color="#E02041" />
            Não tenho cadastro
          </Link>
                </form>
            </section>

            <img src={heroesImg} alt="Heroes" />
        </div>
    );
}