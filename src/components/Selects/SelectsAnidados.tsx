import { useEffect, useState } from "react";
import { SelectList } from "../SelectList/SelectList";
import "./SelectsAnidados.css";
import imagen from "../../assets/catastro.jpg";

import {
    URLPROVINCIAS,
    URLMUNICIPIOS,
    URLCALLES,
    URLNUMEROSCALLE,    
} from "../API/api";

export const SelectsAnidados = ({codMunicipio, codCalle, codNumero}) => {
    
    const [provincia, setProv] = useState();
    const [municipio, setMuni] = useState();
    const [calle, setCalle] = useState();
    const [numero, setNumero] = useState(null);

    const enviaDatos = () => {
        codMunicipio(municipio);
        codCalle(calle);
        codNumero(numero);
    }

    const borrar = () => {
        setProv(undefined);
        setMuni(undefined);
        setCalle(undefined);
        setNumero(null);
        codMunicipio(null);
        codCalle(null);
        codNumero(null);        
    }

    useEffect(() => {
        enviaDatos();
    }, [numero!=null]);    

    return (
        <main className="selects"> 
            <h2>Consultas al Catastro</h2> 
            <img src={imagen} alt="catastro" className="imagen" />                                   
            <SelectList 
                title="Provincia:"
                url={URLPROVINCIAS}
                handleChange={(e) => {
                    setProv(parseInt(e.target.value));
                }}            
            />        
        {provincia && <SelectList
            title="Municipio:"
            url={`${URLMUNICIPIOS}/${provincia}`}
            handleChange={(e) => {
                setMuni(parseInt(e.target.value));
            }}
        />}
        {municipio && <SelectList
            title="Calle:"
            url={`${URLCALLES}/${municipio}`}
            handleChange={(e) => {
                setCalle(parseInt(e.target.value));
            }}
        />}
        {calle && municipio && <SelectList
            title="Número:"
            url={`${URLNUMEROSCALLE}/${municipio}/${calle}`}
            handleChange={(e) => {
                setNumero(e.target.value);
            }}
        />}
        { numero && <span className="consulta" onClick={borrar}>Nueva Consulta</span> }        
    </main>
    );
};
