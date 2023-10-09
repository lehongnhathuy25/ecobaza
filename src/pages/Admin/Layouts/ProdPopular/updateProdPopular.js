import className from 'classnames/bind'
import style from './prodPopular.module.scss'
import {useState, useEffect} from 'react'
import Rules from '../../components/Rules'
import Submit from '../../components/submit'
import UpdateAPI from "~/Api/UpdateAPI"
import getSession from '~/Session/getSession'
import useFindValue from '~/Hooks/useFindValue'
import Message from '../../components/Message'
import Config from "~/config"
import  Product from '~/Api/Product'
const cx = className.bind(style)
function UpdateProdPopular() {
    const [type_id,setType_id] = useState("")
    const [name,setName] = useState()
    const [thumbnail,setThumbnail] = useState("")
    const [image,setImage] = useState("")
    const [description,setDescription] = useState("")
    const [oldPrice,setOldPrice] = useState("")
    const [newPrice,setNewPrice] = useState("")
    const [message,setMessage] = useState(false)
    const prod = Product()
    const id = getSession('product_popular')
    const value = useFindValue(id,prod)
    const handleUpdate = (e) =>{
        e.preventDefault()
        const FormData = {
            type_id,
            name,
            thumbnail,
            description,
            oldPrice,
            newPrice,
            image
        }
        
        const url = `product_popular/${id}`
        UpdateAPI(FormData,url)
        setMessage(true)
    }
   

    useEffect(()=>{
        if(value){
            setType_id(value.type_id)
            setName(value.name)
            setThumbnail(value.thumbnail)
            setDescription(value.description)
            setOldPrice(value.oldPrice)
            setNewPrice(value.newPrice)
            setImage(value.image)
        }
    },[value])
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
                <Rules label="Type ID"  type="text"  value={type_id || "" } onchange={(e)=>{setType_id(e.target.value)}} placeholder="Enter Type ID"></Rules>
                <Rules label="Name"   type="text" value={name || "" } onchange={(e)=>{setName(e.target.value)}} placeholder="Enter Name"></Rules>
               
                <Rules label="Description" type="text" value={description || ""} onchange={(e)=>{setDescription(e.target.value)}} placeholder="Enter Description">
                    
                </Rules>
                <Rules label="Old Price" type="number" value={oldPrice || ""} onchange={(e)=>{setOldPrice(e.target.value)}} placeholder="Enter Old Price"></Rules>
                <Rules label="New price" type="number" value={newPrice || ""}  onchange={(e)=>{setNewPrice(e.target.value)}} placeholder="Enter New Price"></Rules>
                <Rules label="Image"  type="text" value={thumbnail || ""} onchange={(e)=>{setThumbnail(e.target.value)}} placeholder="Enter Image">
                <div>
                        <a className={cx("url_image")} href="https://www.truongblogger.top/p/upload-anh.html"  target="_blank">initialize image URL here!</a>
                </div>
                </Rules>
                <Rules label="Image"  type="text" value={image|| ""} onchange={(e)=>{setImage(e.target.value)}} placeholder="Enter Image">
                <div>
                        <a className={cx("url_image")} href="https://www.truongblogger.top/p/upload-anh.html"  target="_blank">initialize image URL here!</a>
                </div>
                </Rules>
                <Submit tt1="Update" tt2="exit"  link={Config.router.productPopular}  onclick={handleUpdate}></Submit>
            </form>
            <Message message={"sucessFully"} status={message} onclick={ removeMessage} >
                <div className={cx("message-icon")} > <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24" id="checkmark"><g data-name="Layer 2"><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm4.3 7.61-4.57 6a1 1 0 0 1-.79.39 1 1 0 0 1-.79-.38l-2.44-3.11a1 1 0 0 1 1.58-1.23l1.63 2.08 3.78-5a1 1 0 1 1 1.6 1.22z" data-name="checkmark-circle-2"></path></g></svg></div>
            </Message> 
        </>
     );
}

export default UpdateProdPopular;
