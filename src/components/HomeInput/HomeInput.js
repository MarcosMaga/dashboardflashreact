import React from "react";
import Home from "../Home/Home";
import './HomeInput.css';

function HomeInput(){
    function ChangeColor(e){
        const input = document.getElementById("input-name");
        input.style.backgroundColor = 'white';
        input.style.backgroundImage = "url('https://i0.wp.com/www.thinkafrica.fi/wp-content/uploads/2019/04/search-icon.png?fit=1200%2C1200&ssl=1&w=640')"
    }

    function ChangeColorOff(){
        const input = document.getElementById("input-name");
        input.style.backgroundColor = '#6099F6';
        input.style.backgroundImage = 'none';
    }

    return(
        <div className="inputs">
            <h1>Crie e acesse gráficos aqui!</h1>
            <input onMouseOut={ChangeColorOff} onMouseEnter={ChangeColor} onFocus={ChangeColor} id="input-name" type="text" placeholder="Insira o nome do gráfico que deseja criar"/>
            <button>Criar</button>
        </div>
    );
}

export default HomeInput;