import React from "react";
import './FormContato.css';

function FormContato(){
    return(
        <div className="FormContato">
            <h2>Formulário de Contato</h2>
            <form>
                <label>Nome: <input minLength="1" type="text"/></label>
                <label>Email: <input minLength="1" type="email"/></label>
                <label>Texto: <input minLength="1" type="text"/></label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}

export default FormContato;