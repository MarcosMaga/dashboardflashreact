import React from "react";
import './QuemSomos.css';
import TextAndTitle from "../TextAndTitle/TextAndTitle";
import Footer from "../Footer/Footer";

function QuemSomos(){
    return(
        <div className="QuemSomos">
            <div className="panel">
                <TextAndTitle title="Quem somos?" text="Olá, meu nome é Marcos Magalhães, sou aluno do Instituto Federal de São Paulo Campus Campinas. O objetivo deste site foi criar um Dashboard para a aula de Desenvolvimento Web do Professor André Bordignon."/>
                <img alt="Imagem Instituto Federal" src="https://moodle.cmp.ifsp.edu.br/pluginfile.php/1/theme_academi/logo/1644248932/LogoIFSPCMP.jpg"/>     
            </div>
            <Footer/>
        </div>
    );
}
export default QuemSomos;