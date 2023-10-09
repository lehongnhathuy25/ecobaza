import axios from 'axios';
const request = axios.create(
    {
        baseURL:'https://64f1a79d0e1e60602d241398.mockapi.io/ecobazar/categories'
    }
)
export const get =  async(path) =>{
    const responsive = await request.get(path);
    return responsive.data
}

export default request
