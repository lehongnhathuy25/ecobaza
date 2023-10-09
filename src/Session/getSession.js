const getSession = (item) =>{
    const data =  sessionStorage.getItem(item)

    return data
}
export default getSession
