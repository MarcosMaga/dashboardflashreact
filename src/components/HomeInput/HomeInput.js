import { doc } from "firebase/firestore";
import {useNavigate, NavLink} from 'react-router-dom';
import React from "react";
import Home from "../Home/Home";
import { toast } from "react-hot-toast";
import './HomeInput.css';

function HomeInput(){
    const navigate = useNavigate();

    const Criar = () => navigate('/criar');

    function ChangeColor(e){
        const input = document.getElementById("input-name");
        input.style.backgroundColor = 'white';
        input.style.color = 'silver'
        input.style.backgroundImage = "url('https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640')"
    }

    function ChangeColorOff(){
        const input = document.getElementById("input-name");
        input.style.color = 'white';
        input.style.backgroundColor = '#6099F6';
        input.style.backgroundImage = 'none';
    }

    function CreateNewGraph(){
        const input = document.getElementById("input-name");

        if(input.value != "")
        {
            localStorage.setItem("newGraph", input.value);
            Criar();
        }
        else
            toast.error('Digite um nome para criar um gráfico');
    }

    return(
        <div className="inputs">
            <h1>Crie e acesse gráficos aqui!</h1>
            <input onMouseOut={ChangeColorOff} onMouseEnter={ChangeColor} onFocus={ChangeColor} id="input-name" type="text" placeholder="Insira o nome do gráfico que deseja criar"/>
            <button onClick={CreateNewGraph}><NavLink to="/criar"/> Criar</button>
        </div>
    );
}

export default HomeInput;