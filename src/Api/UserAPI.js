
import * as userService from '~/service/UserService';
import {useEffect,useState} from 'react'
function UserAPI() {
    const [api,setApi ] = useState([])
        useEffect(()=>{
                const fecthApi = async ()=>{
                    const result = await userService.users();
                    setApi(result)     
                }
                fecthApi()
        },[])  
        return api
}

export default UserAPI;
