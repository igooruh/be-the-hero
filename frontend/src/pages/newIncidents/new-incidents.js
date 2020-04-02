import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './new-incidents-style.scss';
import LogoBeTheHero from '../../components/logoBeTheHero/logo-be-the-hero';
import api from '../../services/api';

export default function NewIncidents() {
    const ongId = localStorage.getItem('ongId');
    const [title, setTitle] = useState('');
    const [description,  setDescription] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const registerIncident = async event => {
        event.preventDefault();

        const data = {title, description, value};
        try {
            await api.post('incidents', data, {
                headers: {
                    Authorization: ongId
                }
            });

            history.push('/profile');
        } catch(err) {
            alert('Erro ao registrar um novo incidente!');
            console.error(err);
        }
    }

    return (
        <div className="new-incident-container">
            <div className="content">
                <section>
                    <LogoBeTheHero />

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>

                    <Link className="links-app" to="/profile">
                        <FiArrowLeft className="icon-app" size={16} />
                        Voltar a home
                    </Link>
                </section>

                <form onSubmit={registerIncident}>
                    <input placeholder="Título do caso"
                        value={title}
                        onChange={event => setTitle(event.target.value)} />
                    <textarea placeholder="Descrição"
                        value={description}
                        onChange={event => setDescription(event.target.value)} />
                    <input placeholder="Valor em reais"
                        value={value}
                        onChange={event => setValue(event.target.value)} />

                    <button className="button-general" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}