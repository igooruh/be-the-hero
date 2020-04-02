import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './logon-style.scss';
import LogoBeTheHero from '../../components/logoBeTheHero/logo-be-the-hero';
import heroesImg from '../../assets/heroes.png';
import api from '../../services/api';

export default function Logon() {
    const [id, setId] = useState('');
    const history = useHistory();

    const handleLogin = async e => {
        e.preventDefault();

        try {
            const response = await api.post('session', { id });

            // Deixando identifacação na sessão
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        } catch(err) {
            alert('Falha no login, tente novamente');
            console.error(err);
        }
    }

    return(
        <div className="logon-container">
            <section className="form">
                <LogoBeTheHero />

                <form onSubmit={handleLogin}>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)} />
                    <button type="submit" className="button-general">Login</button>

                    <Link className="links-app" to="/register">
                        <span>
                            <FiLogIn className="icon-app" size={16} />
                            Não tenho cadastro
                        </span>
                    </Link>
                </form>
            </section>
            <img src={ heroesImg } alt="Heroes" />
        </div>
    );
}