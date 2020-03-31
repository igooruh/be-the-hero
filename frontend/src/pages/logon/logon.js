import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './logon-style.scss';
import LogoBeTheHero from '../../components/logoBeTheHero/logo-be-the-hero';
import heroesImg from '../../assets/heroes.png';

export default function Logon() {
    return(
        <div className="logon-container">
            <section className="form">
                <LogoBeTheHero />

                <form>
                    <h1>Faça seu Logon</h1>

                    <input placeholder="Sua ID"/>
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