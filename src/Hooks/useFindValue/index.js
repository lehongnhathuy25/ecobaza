
const useFindValue = (id,data)=>{
   if(data.length){
       const findValue = data.find((value)=>{
           return value.id === id
       })
       return findValue
   }
}
export default useFindValue
