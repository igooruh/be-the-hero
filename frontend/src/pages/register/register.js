import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './register-style.scss';
import LogoBeTheHero from '../../components/logoBeTheHero/logo-be-the-hero';

export default function Register() {
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

                <form>
                    <input placeholder="Nome da ONG" />
                    <input type="email" placeholder="E-mail" />
                    <input placeholder="Whatsapp" />

                    <div className="input-group">
                        <input placeholder="Cidade" />
                        <input placeholder="UF" maxLength="2" style={{ width: 80 }} />
                    </div>
                    <button className="button-general" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}