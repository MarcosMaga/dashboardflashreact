import React from "react";
import './Home.css';
import HomeInput from "../HomeInput/HomeInput";
import TextAndTitle from "../TextAndTitle/TextAndTitle";
import Footer from "../Footer/Footer";
import {Chart as ChartJs ,Tooltip, Title, ArcElement, Legend} from 'chart.js';
import {Pie} from 'react-chartjs-2';

ChartJs.register(
    Tooltip, Title, ArcElement, Legend
);

function Home(){
    localStorage.removeItem("newGraph");
    localStorage.removeItem("dataX");
    localStorage.removeItem("dataY");

    function ReturnData(){
        let datas = localStorage.getItem("dados");

        if(datas == null)
        {
          let vetor = []
          let value = {page: 'Pagina Inicial', cliques: 1};
          let value2 = {page: 'Contato', cliques: 0};
          let value3 = {page: 'Quem somos?', cliques: 0};
          vetor.push(value, value2, value3);
          localStorage.setItem("dados", JSON.stringify(vetor));
          datas = localStorage.getItem("dados");
        }

        datas = JSON.parse(datas);
        let vetorData = [];
        let vetorLabel = []

        for(let i=0; i < datas.length; i++){
            vetorData.push(datas[i].cliques);
            vetorLabel.push(datas[i].page)
        }

        const values = {
            datasets:[{
                data: vetorData,
                backgroundColor:['#0b5fec', '#548ff2', '#0a48ad'],
            }],
            labels: vetorLabel
        }

        return values;
    }

    return(
        <div className="Home">
            <div className="create-chart">
                <div className="inputs-chart">
                    <HomeInput/>
                </div>
            </div>
            <div className="panel">
                <TextAndTitle className="texto" title='Bem vindo!' text="Seja bem vindo! Você pode usar este site para gerar gráficos e baixa-los. Utilizando um arquivo de Excel ou até mesmo inserindo os dados manualmente é possivel criar gráficos de maneira intuitiva. Deseja entrar em contato? Clique e venha conversar com a gente."/>
                <div className="ConteinerGraph">
                    <li><strong>Gráfico 1: </strong>Gráfico de Cliques pela pagina.</li>
                    <div className="Graph">
                        <Pie data={ReturnData()}/>
                    </div>
                </div>
                <p>O gráfico a cima é gerado de forma dinamica. No seu navegador, toda a vez que você faz um clique é armazenado, fazendo com que ele seja exibido toda vez ao carregar a Pagina Inicial.</p>
            </div>
            <Footer/>
        </div>
    );
}
export default Home;