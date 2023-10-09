import Rules from '../../components/Rules'
import Submit from '../../components/submit'
import Config from '~/config'
import {useState,useRef,useEffect} from 'react'
import UpdateUserAPI from '~/Api/UpdateUserAPI'
import Message from '../../components/Message'
import className from 'classnames/bind'
import style from './users.module.scss'
import UserAPI from '~/Api/UserAPI'
import  getSession from '~/Session/getSession'
import useFindValue from '~/Hooks/useFindValue'
const cx = className.bind(style)
function UpdateUser() {
    const [id, setId] = useState('');
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message,setMessage] = useState(false)
    const  refUserName = useRef()
    const  refID = useRef()
    const  refPassword = useRef()
    const listUser =  UserAPI()
    const idUser = getSession('user')
    const value = useFindValue(idUser,listUser)
    const handleUpdate = (e) =>{
        e.preventDefault()
        const FormData = {
            id,
            username,
            password,
        }
        const url = `user/${id}`
        UpdateUserAPI(FormData,url)
        setMessage(true)
    }
    useEffect(()=>{
        if(value){
            setId(value.id)
            setUserName(value.username)
            setPassword(value.password)
        }
    },[value])
    return (<>
       <form  autofill="off" autoComplete="off" > 
       <Rules ref={refID} label="ID" value={id || ""} type="text" name ="id" placeholder="Enter id" onchange={(e)=>{setId(e.target.value)}} ></Rules>
            <Rules ref={refUserName} label="Username" value={username || ""} type="text" name ="username" placeholder="Enter username" onchange={(e)=>{setUserName(e.target.value)}} ></Rules>
            <Rules ref={refPassword}  label="" value={password || ""} type="text" name ="password" placeholder="Enter Name"  onchange={(e)=>{setPassword(e.target.value)}}></Rules>
           
          <Submit  tt1="Update" tt2="exit" link={Config.router.usersManager} onclick={ handleUpdate}></Submit>
        </form>
            <Message message={"sucessFully"} status={message} >
                <div className={cx("message-icon")} > <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" id="checkmark"><g data-name="Layer 2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2"></path></g></svg></div>
            </Message> 
    </> );
}

export default UpdateUser;
