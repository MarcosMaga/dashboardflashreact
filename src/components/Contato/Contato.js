import React from "react";
import './Contato.css';
import TextAndTitle from '../TextAndTitle/TextAndTitle';
import FormContato from "../FormContato/FormContato";

function Contato(){
    return(
        <div className="Contato">
            <div className="panel">
                <TextAndTitle title = "Contato" text="Olá, bem vindo! Sinta-se a vontade de entrar em contato por qualquer das opções a baixo."/>
            </div>
            <div className="panel">
                <FormContato/>
            </div>
        </div>
    );
}
export default Contato;