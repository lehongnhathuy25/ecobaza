import axios from 'axios';
const onDelete = (url,id) => {
    if(id){
        axios.delete(`${url}/${id}`)
     
    }
}
export default onDelete
