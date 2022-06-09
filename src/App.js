import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import QuemSomos from './components/QuemSomos/QuemSomos';
import Contato from './components/Contato/Contato';
import {BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return(
    <div className="App">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/quemsomos" element={<QuemSomos/>}/>
          <Route path="/contato" element={<Contato/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
