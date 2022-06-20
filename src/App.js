import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Contato from './components/Contato/Contato';
import Criar from './components/Criar/Criar';
import GraphPlot from './components/GraphPlot/GraphPlot';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

function App() {
  function Counter(){
    const local = window.location.pathname;
    let vetor = [];
    let contador = 0;

    let dados = localStorage.getItem("dados");

    if(dados == null)
    {
      let value = {page: 'Pagina Inicial', cliques: 1};
      let value2 = {page: 'Contato', cliques: 0};
      let value3 = {page: 'Quem somos?', cliques: 0};
      vetor.push(value, value2, value3);
      localStorage.setItem("dados", JSON.stringify(vetor));
    }

    while(vetor.length)
      vetor.pop();

    dados = localStorage.getItem("dados");
    dados = JSON.parse(dados);

    let destiny = ""
    switch(local){
      case "/": destiny = 'Pagina Inicial'; break;
      case "/contato": destiny = 'Contato'; break;
      case "/quemsomos": destiny = "Quem somos?"; break;
    } 

    for(let i=0; i < dados.length; i++){
      if(dados[i].page === destiny)
      {
        dados[i].cliques = dados[i].cliques+1;
        localStorage.setItem("dados", JSON.stringify(dados));
        break;
      }
    }
  }

  return(
    <div className="App" onClick={Counter}>
      <BrowserRouter>
        <Header/>
        <Toaster/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quemsomos" element={<QuemSomos/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/criar" element={<Criar/>}/>
          <Route path='/build' element={<GraphPlot/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
