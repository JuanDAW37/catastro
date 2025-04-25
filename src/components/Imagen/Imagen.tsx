import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import {FOTOFACHADA} from '../API/api';

export const Imagen = ({referencia}) => {    
    const [foto, setFoto] = useState(null);
    const url = `${FOTOFACHADA}/${referencia.substr(0,14)}/facade`;
    const {imagen, loading, error} = useFetch(`${url}`);
        if (referencia === '') {
        return null;       
    }
    
    if (!imagen) return null;
    if (loading) return <>Loading...</>;
    if (error) return <>Error: {error}</>;
    console.log('Data:', imagen);       
    return (
        <>Imagen </>
    )        
}

//https://api.goolzoom.com/v1/cadastre/cadastralparcel/9099014NH4999N/facade
//https://api.goolzoom.com/v1/cadastre/cadastralparcel/4242103VK2844S/facade