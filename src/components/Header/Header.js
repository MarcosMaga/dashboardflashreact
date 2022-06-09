import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import GraphImage from '../../assets/imgs/graph.png';

function Header(props) {
    return (
        <div className='Header'>
            <header>
                <div className='center-header'>
                        <img src={GraphImage} alt="Icon Graph"/>
                        <h1>Dashboard</h1>
                </div>
                <div className="bottom-header">
                    <NavLink to="/">Pagina Inicial</NavLink>
                    <NavLink to="/quemsomos">Quem Somos?</NavLink>
                    <NavLink to="/contato">Contato</NavLink>
                </div>
            </header>
        </div>
    );
}

export default Header;