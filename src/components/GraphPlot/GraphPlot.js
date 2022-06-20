import React, { Component } from "react";
import './GraphPlot.css';
import TextAndTitle from "../TextAndTitle/TextAndTitle";
import {Chart as ChartJs, registerables} from 'chart.js';
import {Line} from 'react-chartjs-2';
import {useNavigate} from 'react-router-dom'
import { saveAs } from 'file-saver';

ChartJs.register(...registerables);


function GraphPlot(){
    const navigate = useNavigate();
    const Back = () => navigate('/');

    function ReturnData(){
        const x = JSON.parse(localStorage.getItem('dataX'));
        const y = JSON.parse(localStorage.getItem('dataY'));

        const data = {
            labels: x,
            datasets:[{
                label: "X",
                data: y,
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "rgba(75,192,192,1)"
            }]
        }

        return data;
    }

    function Voltar(){
        Back();
    }

    function Download(){
        let canvas = document.getElementById("canvas");
        let url = canvas.toDataURL("image/png");
        let link = document.createElement('a');
        let name = localStorage.getItem('newGraph').toLowerCase().replaceAll(" ", "-")
        link.download =  name + '.png';
        link.href = url;
        link.click();
    }

    return(
        <div className="GraphPlot">
            <div className="panel">
                <TextAndTitle title="Gráfico Plotado"/>
                <Line className="PlotGraph" id="canvas" data={ReturnData()}/>
                <div className="buttons">
                    <button onClick={Download}>Baixar</button>
                    <button onClick={Voltar}>Voltar</button>
                </div>
            </div>
        </div>
    );
}

export default GraphPlot;