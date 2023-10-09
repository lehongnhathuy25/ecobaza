import axios from 'axios';
import * as request  from "~/utils";
const AddAPI = (formData,url)=>{
    axios.post(`https://64f1a79d0e1e60602d241398.mockapi.io/ecobazar/categories/${url}`,formData )
    .then((res)=>{
     return res;
 
    })
    .catch((error)=>{
        console.log(error)
    })
 
}

export default AddAPI;
