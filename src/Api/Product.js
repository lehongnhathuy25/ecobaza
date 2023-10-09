import * as ProductPopular from '~/service/ProductPopular'
import {useEffect,useState} from 'react'
function Product() {
    const [api,setApi ] = useState([])
    
        useEffect(()=>{
                const fecthApi = async ()=>{
                        const result = await ProductPopular.product();
                        setApi(result)     
                }
                fecthApi()
        },[])  
        return api
    
}

export default Product;
