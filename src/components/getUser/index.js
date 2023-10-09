import getLocalStorage from '~/LocalStorage/getLocalStorage'
import getSession from '~/Session/getSession'
const getUser = () =>{
    const userLocal= getLocalStorage('user')
    const userSession=  getSession('user')
    const user =  userLocal ? userLocal : userSession
    return JSON.parse(user)
}
export default getUser
