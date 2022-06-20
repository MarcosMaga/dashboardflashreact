import React from "react";
import './Criar.css'
import TextAndTitle from "../TextAndTitle/TextAndTitle";
import * as XLSX from "xlsx";
import {useNavigate} from 'react-router-dom';
import { doc } from "firebase/firestore";
import { toast } from "react-hot-toast";

function Criar(){
    const graphName = localStorage.getItem("newGraph");
    const navigate = useNavigate();
    const Plot = () => navigate('/build');

    let xValues = [];
    let yValues = [];

    function ReadExcel(e){
        const [file] = e.target.files;
        const reader = new FileReader();
 
        reader.onload =  (evt) => {
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, {type: "binary"});
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname]
            let data = XLSX.utils.sheet_to_csv(ws, {header: 1});
            data = data.replaceAll('\n', ',');
            data = data.split(',');
            SaveData(data);      
        }
        reader.readAsArrayBuffer(file);
    }

    function SaveData(data){
        let vetorX = [];
        let vetorY = [];
        for(let i=2; i < data.length; i++){
            if(i % 2 == 0)
                vetorX.push(data[i]);
            else
                vetorY.push(data[i]);
        }

        localStorage.setItem("dataX", JSON.stringify(vetorX));
        localStorage.setItem("dataY", JSON.stringify(vetorY));
        Plot();
    }

    function IniData(e){
        const excel = document.getElementById('inputFile');
        const inputData = document.getElementById('dataInput');
        excel.style.visibility = 'hidden';
        e.target.style.visibility = 'hidden';
        inputData.style.visibility = 'visible';
    }

    function AddData(){
        const inputX = document.getElementById('inputX');
        const inputY = document.getElementById('inputY');

        if(inputX.value != "" && inputY.value != ""){
            xValues.push(inputX.value);
            yValues.push(inputY.value);
            inputX.value = "";
            inputY.value = "";
            toast.success = "Adicionado com sucesso";
        }  
        else
            toast.error('Valores de entrada incompleto.');
    }

    function Build(){
        localStorage.setItem('dataX', JSON.stringify(xValues));
        localStorage.setItem('dataY', JSON.stringify(yValues));
        Plot();
    }

    return(
        <div className="Criar">
            <div className="panel">
                <TextAndTitle title="Crie seu Gráfico!" text="Pretende criar seu gráfico? Vamos lá então!"/>
            </div>
            <div className="panel">
                <TextAndTitle title="Nome:" text={graphName}/>
                <div className="bt-criar">
                    <button onClick={IniData}>Inserir Dados</button>
                    <input onChange={ReadExcel} id="inputFile" type="file"/>
                </div>
                <div className="inputData" id="dataInput">
                        <label>Valor X:</label>
                        <input id="inputX" type="text"/>
                        <label>Valor Y:</label>
                        <input id="inputY" type="text"/>
                        <button onClick={AddData}>Adicionar</button>
                        <button onClick={Build}>Montar</button>
                    </div>
            </div>
        </div>
    );
}

export default Criar;