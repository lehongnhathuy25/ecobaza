import axios from 'axios';
const request = axios.create(
    {
        baseURL:'https://650917fdf6553137159af551.mockapi.io/ecobazar'
    }
)
export const get =  async(path) =>{
    const responsive = await request.get(path);
    return responsive.data
}

export default request
