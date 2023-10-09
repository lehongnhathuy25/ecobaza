
import * as productTypes from '~/service/ProductTypes';
import {useEffect,useState,memo,useCallback} from 'react'
function ProdTypeAPI() {
    const [api,setApi ] = useState([])
        useEffect(()=>{
                const fecthApi = async ()=>{
                        const result = await productTypes.product();
                        setApi(result)     
                }
                fecthApi()
        },[])  
        
        return api
}

export default ProdTypeAPI;
