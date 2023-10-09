import axios from 'axios';
const UpdateUserAPI = (formData,url)=>{
    axios.put(`https://650917fdf6553137159af551.mockapi.io/ecobazar/${url}`,formData )
    .then((res)=>{
     return res;
 
    })
    .catch((error)=>{
        console.log(error)
    })
 
}

export default UpdateUserAPI;
