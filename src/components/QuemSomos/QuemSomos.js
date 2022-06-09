import React from "react";
import './QuemSomos.css';
import TextAndTitle from "../TextAndTitle/TextAndTitle";

function QuemSomos(){
    return(
        <div className="QuemSomos">
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="panel">
                <TextAndTitle title="Quem somos?" text="Olá, meu nome é Marcos Magalhães, sou aluno do Instituto Federal de São Paulo Campus Campinas. O objetivo deste site foi criar um Dashboard para a aula de Desenvolvimento Web do Professor André Bordignon."/>
            </div>
        </div>
    );
}
export default QuemSomos;