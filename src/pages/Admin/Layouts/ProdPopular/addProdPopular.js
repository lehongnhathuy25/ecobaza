import className from 'classnames/bind'
import style from './prodPopular.module.scss'
import {useState, useEffect,useRef} from 'react'
import Rules from '../../components/Rules'
import Submit from '../../components/submit'
import  AddAPI from '~/Api/AddAPI'
import Message from '../../components/Message'
import Config from "~/config"
const cx = className.bind(style)
function AddProdPopular() {
    const [type_id,setType_id] = useState()
    const [name,setName] = useState()
    const [thumbnail,setThumbnail] = useState()
    const [image,setImage] = useState()
    const [description,setDescription] = useState()
    const [oldPrice,setOldPrice] = useState()
    const [newPrice,setNewPrice] = useState()
    const [message,setMessage] = useState(false)
    const refID = useRef()
    const refName = useRef()
    const refThumnail = useRef()
    const refDescrition = useRef()
    const refImage = useRef()
    const refOldPrice = useRef()
    const refNewPrice = useRef();
    const handlePost = (e) =>{
        e.preventDefault()
        const formData={
            name,
            type_id,
            oldPrice,
            newPrice,
            thumbnail,
            description,
            image,
        }
        const url="product_popular"
        if(formData){
            AddAPI(formData,url)
            setMessage(true)
            refID.current.value =""
            refName.current.value =""
            refThumnail.current.value =""
            refImage.current.value =""
            setThumbnail("")
            setImage("")
            refDescrition.current.value =""
            refOldPrice.current.value =""
            refNewPrice.current.value =""
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
                <Rules ref={refID} label="Type ID" type="text" onchange={(e)=>{setType_id(e.target.value)}} placeholder="Enter Type ID"></Rules>
                <Rules ref={refName} label="Name" type="text" onchange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"></Rules>
                <Rules  ref={refDescrition} label="Description" type="text"  onchange={(e)=>{setDescription(e.target.value)}} placeholder="Enter Description"></Rules>
                <Rules ref={refOldPrice} label="Old Price" type="number"  onchange={(e)=>{setOldPrice(e.target.value)}} placeholder="Enter Old Price"></Rules>
                <Rules ref={refNewPrice} label="New price" type="number"  onchange={(e)=>{setNewPrice(e.target.value)}} placeholder="Enter New Price"></Rules>
                <Rules ref={refThumnail} label="Thumbnail" type="text"  onchange={(e)=>{setThumbnail(e.target.value)}} placeholder="Enter thumbnail">
                {thumbnail ? <div  className={cx("url_image")}>
                    <img src={thumbnail} />
                    </div> :  <div>
                        <a className={cx("url_image")} href="https://www.truongblogger.top/p/upload-anh.html"  target="_blank">initialize image URL here!</a>
                    </div>}
                </Rules>
                <Rules ref={refImage} label="Image" type="text"  onchange={(e)=>{setImage(e.target.value)}} placeholder="Enter Image">
                {image ? <div  className={cx("url_image")}>
                    <img src={image} />
                    </div> :  <div>
                        <a className={cx("url_image")} href="https://www.truongblogger.top/p/upload-anh.html"  target="_blank">initialize image URL here!</a>
                    </div>}
                </Rules>
                <Submit  tt1="Add" tt2="exit"   link={Config.router.productPopular}  onclick={handlePost}></Submit>
            </form>
            <Message message={"sucessFully"} status={message} onclick={ removeMessage} >
                <div className={cx("message-icon")} > <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" id="checkmark"><g data-name="Layer 2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2"></path></g></svg></div>
            </Message> 
        </>
     );
}

export default AddProdPopular;
