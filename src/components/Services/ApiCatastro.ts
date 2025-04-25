import {APIKEY} from '../API/api.ts'
export const Api = () =>{
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const customFetch = async (endpoint:any, options:any) => {
        const defaultHeader = {accept:'application/json', api_key:`${APIKEY}`};
        const controller = new AbortController();
        // eslint-disable-next-line no-self-assign
        options.signal = options.signal;
        options.header = options.header ? {...defaultHeader, ...options.header} : defaultHeader;
        options.method = options.method || 'GET';        
        setTimeout(()=>{controller.abort()},3000);
        const response = await fetch(endpoint, options);        
        if (!response.ok) {            
            return {error:true, status: response.status || '00', statusText:response.statusText || 'Ocurrió un error'}                        
        } else {
            return await response.json();                        
        }        
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const get = (url:any, options:any = {}) => {
        return customFetch(url, options)
    }

    return {get};
}