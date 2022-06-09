import React from "react";
import './Home.css';
import HomeInput from "../HomeInput/HomeInput";
import TextAndTitle from "../TextAndTitle/TextAndTitle";

function Home(){
    return(
        <div className="Home">
            <div className="create-chart">
                <HomeInput/>
            </div>
            <div className="panel">
                <TextAndTitle className="texto" title='Bem vindo!' text="Seja bem vindo! Você pode usar este site para gerar gráficos e baixa-los. Utilizando um arquivo de Excel ou até mesmo inserindo os dados manualmente é possivel criar gráficos de maneira intuitiva. Deseja entrar em contato? Clique e venha conversar com a gente."/>
            </div>
        </div>
    );
}
export default Home;