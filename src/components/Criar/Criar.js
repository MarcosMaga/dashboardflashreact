import React from "react";
import './Criar.css'
import TextAndTitle from "../TextAndTitle/TextAndTitle";
import * as XLSX from "xlsx"
;
function Criar(){
    const graphName = localStorage.getItem("newGraph");

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
    }

    return(
        <div className="Criar">
            <div className="panel">
                <TextAndTitle title="Crie seu Gráfico!" text="Pretende criar seu gráfico? Vamos lá então!"/>
            </div>
            <div className="panel">
                <TextAndTitle title="Nome:" text={graphName}/>
                <div className="bt-criar">
                    <button>Inserir Dados</button>
                    <input onChange={ReadExcel} type="file"/>
                </div>
            </div>
        </div>
    );
}

export default Criar;