import { useFetch } from "../hooks/useFetch";
import './SelectList.css';

interface SelectListProps {
    title: string;
    url:string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SelectList = ({ title, url, handleChange }: SelectListProps) => {
    const {data, error, loading} = useFetch(url);    
    if(!data) return;           
    if(error) return <p>Error: {(error as Error).message}</p>;
    const id = `select-${title}`;    
    return(
        <div className="select-container">
            <label htmlFor={id}>{title}</label>
            {loading && <p>Cargando...</p>}
            <select className="select" name={id} id={id} onChange={handleChange}>
                <option value="">Elige un/a {title}</option>                               
                {data.map((el, ix) => {
                    const clave = 'M';                    
                    if (url.includes("streetnumbers")){                                                                                   
                        return(
                            <option key={clave+ix} value={el}>{el}</option>                    
                        )                        
                    }else if(url.includes("streets")){                                                
                        return(
                            <option key={el.streetcode} value={el.streetcode}>{el.name}</option>                    
                        )
                    }else if(url.includes("municipalities")){                                                
                        return(
                            <option key={el.municipalitycode} value={el.municipalitycode}>{el.name}</option>                    
                        )
                    }else if(url.includes("provinces") && !url.includes("municipalities")){                                                
                        return(
                            <option key={el.provincecode} value={el.provincecode}>{el.name}</option>                    
                        )
                    }                    
                })}
            </select>
        </div>
    )
}
