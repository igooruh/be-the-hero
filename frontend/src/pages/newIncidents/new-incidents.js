import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './new-incidents-style.scss';
import LogoBeTheHero from '../../components/logoBeTheHero/logo-be-the-hero';

export default function NewIncidents() {
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

                <form>
                    <input placeholder="Título do caso" />
                    <textarea placeholder="Descrição" />
                    <input placeholder="Valor em reais" />

                    <button className="button-general" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}