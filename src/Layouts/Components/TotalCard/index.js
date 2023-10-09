import {useMemo} from 'react'
const TotalCard = (data) =>{
    const total = useMemo(()=>{
        const results = data.reduce((result,prod)=>{
            
            return result +   prod.newPrice * prod.amount
        },0)
      
        return results 
    },[data])
   return total
}
export default TotalCard 
