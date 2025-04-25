import { useState, useEffect } from "react";
import { APIKEY } from "../API/api";

export const useFetch = (url:string) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [imagen, setImagen] = useState('');
  
  useEffect(() => {

    const abortController = new AbortController();
    const signal = abortController.signal;
    
    const fetchData = async () => {
      setLoading(true);
      try{
        const options = {
          method: 'GET',
          headers: {                    
            "x-api-key": APIKEY,            
            "Accept": "image/jpeg",            
          }
        }
        
        const response = await fetch(url, options);

        if (!response.ok) {
          const err = new Error("Error en la respuesta de la API");
          err.message = `Error ${response.status}: ${response.statusText}`;
          throw err;
        }

        const data = await response.json();
        if(!signal.aborted){
          let datos = []
          if(url.includes("municipalities")){
            datos = data.municipalities
            setData(datos);
          }else if(url.includes("streets")){
            datos = data.streets
            setData(datos);
          }
          else if(url.includes("streetnumbers")){
            datos = data.streetnumbers;
            setData(datos);
          }
          else if(url.includes("provinces")){
            datos = data.provinces
            setData(datos);
          }
          else if(url.includes("exactaddress")){            
            datos = data.cadastralreferences;            
            setData(datos);
          }
          else if(url.includes("cadastralparcel")){
            console.log(response);
            /*const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setImagen(imageUrl);            */
          }                    
          
          setError(null);
        }
        
      }catch(error){
        if(!signal.aborted){
          setData([]);
          if(error instanceof Error){
            setError(error);          
          }else{
            setError(new Error("Error desconocido"));
          }            
        }
      }finally{
        if(!signal.aborted){
          setLoading(false);
        }
      }
    }

    fetchData();
    setLoading(false);
    return () => abortController.abort();

  }, [url]);

  return {data, loading, error, imagen}
}
