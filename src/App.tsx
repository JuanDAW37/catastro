import './App.css'
import { useState } from 'react';
import { SelectsAnidados } from './components/Selects/SelectsAnidados';
import { Referencias } from './components/Referencias/Referencias';

function App() {
  
  const [municipio, setMunicipio] = useState();
  const [calle, setCalle] = useState();
  const [numero, setNumero] = useState();
  
  const codMunicipio = (municipio:undefined) => {
    setMunicipio(municipio);
  }

  const codCalle = (calle:undefined) => {
    setCalle(calle);
  }

  const codNumero = (numero:undefined) => {
    setNumero(numero);
  }
    
  return (
    <main className="app">      
      <SelectsAnidados codMunicipio={codMunicipio} codCalle={codCalle} codNumero={codNumero}/>
      {municipio && calle && numero && <Referencias codMunicipio={municipio} codCalle={calle} codNumero={numero}/>}
    </main>
  )
}

export default App
