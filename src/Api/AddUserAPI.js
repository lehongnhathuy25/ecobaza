import axios from 'axios';
const AddUserAPI = (formData,url)=>{
    axios.post(`https://650917fdf6553137159af551.mockapi.io/ecobazar/${url}`,formData )
    .then((res)=>{
     return res;
 
    })
    .catch((error)=>{
        console.log(error)
    })
 
}

export default AddUserAPI;
