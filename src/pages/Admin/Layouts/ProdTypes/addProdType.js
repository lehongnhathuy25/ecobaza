import className from 'classnames/bind'
import style from './prodTypes.module.scss'
import Rules from '../../components/Rules'
import { useState,useRef,useEffect } from 'react';
import Message from '../../components/Message'
import  AddAPI from '~/Api/AddAPI'
import Submit from '../../components/submit'
import Config from "~/config"
const cx = className.bind(style)
function AddProtype() {
    const [type_id, setType_id] = useState('');
    const [name, setName] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [message,setMessage] = useState(false)
    const  refName = useRef()
    const  refID = useRef()
    const  refThumnail = useRef()
    const handlePost = (e)=>{
        e.preventDefault() 
        const formData = {
          type_id,
          thumbnail,
          name
        }
        const url="product_type"
        if(formData){
            AddAPI(formData,url)
            setMessage(true)
            refName.current.value =""
            refID.current.value =""
            refThumnail.current.value =""
            setThumbnail("")
        }
    }
    useEffect(()=>{
        setTimeout(() => {
            setMessage(false)
        }, 10000);
    },[message])
    const removeMessage = () =>{
        setMessage(false)
    }
    return (
        <>
        <form> 
            <Rules ref={refID} label="Type ID" type="text" name ="type_id" placeholder="Enter Type ID" onchange={(e)=>{setType_id(e.target.value)}} ></Rules>
            <Rules ref={ refName} label="Name" type="text" name ="name" placeholder="Enter Name"  onchange={(e)=>{setName(e.target.value)}}></Rules>
            <Rules ref={refThumnail} label="Upload"  type="text" name ="file" onchange={(e)=>{setThumbnail(e.target.value)}}  placeholder="Enter image URL" >
            {thumbnail ? <div  className={cx("url_image")}>
             <img src={thumbnail} />
            </div> :  <div>
                <a className={cx("url_image")} href="https://www.truongblogger.top/p/upload-anh.html"  target="_blank">initialize image URL here!</a>
            </div>}
            </Rules>
           <Submit tt1="Add" tt2="exit" link={Config.router.admin} onclick={handlePost}></Submit>
        </form>
        <Message message={"sucessFully"} status={message} onclick={ removeMessage} >
            <div className={cx("message-icon")} > <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" id="checkmark"><g data-name="Layer 2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2"></path></g></svg></div>
        </Message> 
        </>
      
    )
}

export default AddProtype;
