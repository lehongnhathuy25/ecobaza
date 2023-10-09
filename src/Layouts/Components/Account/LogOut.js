import className from 'classnames/bind'
import style from './account.module.scss'
import 'tippy.js/dist/tippy.css';
import  getSession from '~/Session/getSession'
import getLocalStorage  from '~/LocalStorage/getLocalStorage'
import { useNavigate } from "react-router-dom";
import Config from '~/config'
const cx = className.bind(style)
function LogOut() {

    const navigate = useNavigate()
    const handleLogOut = () =>{
        const sessionItem = getSession('user')
        const getLocalStorageItem = getLocalStorage('user')
        if(sessionItem){
            sessionStorage.removeItem('user');
        }
        if(getLocalStorageItem){
            localStorage.removeItem('user');
        }
        localStorage.removeItem('card');
        navigate(Config.router.signIn)
    }
    return ( 

        <a className={cx('logOut')} onClick={handleLogOut}>
            <span className={cx('logOut-title')}>
                Log Out
            </span>
            <span>
            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="logout"><path d="M4,12a1,1,0,0,0,1,1h7.59l-2.3,2.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l4-4a1,1,0,0,0,.21-.33,1,1,0,0,0,0-.76,1,1,0,0,0-.21-.33l-4-4a1,1,0,1,0-1.42,1.42L12.59,11H5A1,1,0,0,0,4,12ZM17,2H7A3,3,0,0,0,4,5V8A1,1,0,0,0,6,8V5A1,1,0,0,1,7,4H17a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H7a1,1,0,0,1-1-1V16a1,1,0,0,0-2,0v3a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Z"></path></svg>
            </span>
        </a>
     );
}

export default LogOut;
