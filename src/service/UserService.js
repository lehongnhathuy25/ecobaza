import * as request  from "~/utils/users";
export const users = async()=>{
    try {
        const res = await request.get('/user')
        return res 
        
    } catch (error) {
        console.log(error)
    }
}

users()
