import React, {useEffect, useState } from 'react'
import { useFetch } from '../hooks/useFetch';
import {REFCATASTRAL} from '../API/api';
import { Imagen } from '../Imagen/Imagen';
import './Referencias.css';

interface DataProps {
  codMunicipio: string;
  codCalle: string;
  codNumero: string;
}

export const Referencias: React.FC<DataProps> = ({codMunicipio, codCalle, codNumero}) => {
  const {data, error, loading} = useFetch(`${REFCATASTRAL}${codMunicipio}/${codCalle}/${codNumero}/cadastralreferences`);
  
  if(!data) return null;           
  if(error) return <p>Error: {(error as Error).message}</p>;
  const refCatastral = data.length > 0 ? data[0].cadatralreference : '';
  console.log('Referencia catastral:', refCatastral);
  return (
    <main className='referencias'>    
      <section>
        <h2>Resultados</h2>
        <table>
        <thead>
          <tr className='titulos'>
            <th className='referencia'>Referencia catastral</th>
            <th>Piso</th>
            <th>Puerta</th>
          </tr>
        </thead>
        <tbody>
          {loading && <p>Cargando...</p>}
        {data && data.map((el)=>{        
          return(                        
              <tr key={el.cadatralreference} className="detalle">
                <td className='referencia'>{el.cadatralreference}</td>
                <td className='piso'>{el.floor}</td>
                <td className="puerta">{el.door}</td>
              </tr>                      
          )         
        })}
        </tbody>
        </table>
      </section>
      <Imagen referencia={refCatastral} />
    </main>
  )
}
