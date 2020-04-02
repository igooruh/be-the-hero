import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './register-style.scss';
import LogoBeTheHero from '../../components/logoBeTheHero/logo-be-the-hero';
import api from '../../services/api';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    const handleRegister = async e => {
        e.preventDefault();

        const data = {
            name, email, whatsapp, city, uf
        }

        try {
            const response = await api.post('ongs', data);
            alert(`Seu ID de acesso: ${response.data.id}`);
            history.push('/');
        } catch(err) {
            alert('Erro no cadastro, tente novamente');
            console.error(err);
        }
    }

    return (
        <div className="register-container">
            <div className="content">
                <section>
                    <LogoBeTheHero />

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>

                    <Link className="links-app" to="/">
                        <FiArrowLeft className="icon-app" size={16} />
                        Voltar a página de logon
                    </Link>
                </section>

                <form onSubmit={ handleRegister }>
                    <input placeholder="Nome da ONG" value={name} onChange={e => setName(e.target.value)} />
                    <input type="email" placeholder="E-mail" value={email} onChange={e => setEmail(e.target.value)} />
                    <input placeholder="Whatsapp" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} />

                    <div className="input-group">
                        <input placeholder="Cidade" value={city} onChange={e => setCity(e.target.value)} />
                        <input placeholder="UF" maxLength="2" style={{ width: 80 }} value={uf} onChange={e => setUf(e.target.value)}/>
                    </div>
                    <button className="button-general" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}