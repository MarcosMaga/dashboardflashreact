import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';
import GraphImage from '../../assets/imgs/graph.png';

function Header(props) {
    function ChangeSize(event){
        const el = event.target || event.srcElement;
        const val = document.getElementById(el.id);
        val.style.fontSize = "1.9rem";
    }

    function ReturnSize(event){
        const el = event.target || event.srcElement;
        const val = document.getElementById(el.id);
        val.style.fontSize = "1.6rem";
    }
    return (
        <div className='Header'>
            <header>
                <div className='center-header'>
                        <img src={GraphImage} alt="Icon Graph"/>
                        <h1>Dashboard</h1>
                </div>
                <div className="bottom-header">
                    <NavLink id="aPage" onMouseEnter={ChangeSize} onMouseOut={ReturnSize} to="/">Pagina Inicial</NavLink>
                    <NavLink id="aSomos" onMouseEnter={ChangeSize} onMouseOut={ReturnSize}to="/quemsomos">Quem Somos?</NavLink>
                    <NavLink id="aContact" onMouseEnter={ChangeSize} onMouseOut={ReturnSize} to="/contato">Contato</NavLink>
                </div>
            </header>
        </div>
    );
}

export default Header;