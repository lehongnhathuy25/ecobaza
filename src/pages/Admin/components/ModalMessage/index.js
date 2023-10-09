import className from 'classnames/bind'
import style from './modalMessage.module.scss'
import {useState,memo,useEffect} from 'react'
import axios from 'axios';
import onDelete from '~/Api/DeletedAPI';
const cx = className.bind(style)

function ModalMessage({status, deleted_id,onclick,url}) {
    const url_remove = url
   const handleDeleted =(id)=>{
        onDelete(url_remove,id)
        setTimeout(() => {
            window.location.reload();
        }, 1000);
   }
    return (
        <div className={cx("modal")} style={status === true ?{display:'block'}:{display:'none'}}>
            <div className={cx("modal-overlay")}></div>
            <div className={cx("modal-content")}>
                <h3>Do you want delete this product ?</h3>
                <div className={cx("action")}>
                    <button className={cx("btn-save")} onClick={()=>{handleDeleted(deleted_id)}}>Delete</button>
                    <button className={cx("btn-close")} onClick={onclick}>cancel</button>
                </div>
            </div>
        </div>
    )
}

export default memo(ModalMessage);
