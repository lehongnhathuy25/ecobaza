import * as request  from "~/utils";
export const product = async()=>{
   
    try {
        const res = await request.get('/product_type')
        return res 
        
    } catch (error) {
        console.log(error)
    }
}

product()
