import {useMemo} from 'react'
const useTotal = (data) =>{
    
    const total = useMemo(()=>{
        const totalCard = data.reduce((total,currentValue)=>{
            return total  + currentValue.newPrice * currentValue.amount
        },0)
   
        return totalCard
    },[data])

    return total
}
export default useTotal
