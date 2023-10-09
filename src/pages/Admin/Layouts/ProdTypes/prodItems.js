
import className from 'classnames/bind'
import {createContext} from 'react'
import style from './prodTypes.module.scss'
import 'tippy.js/dist/tippy.css';
import Config from '~/config';
import Actions from '../../components/actions'
import setSession from '~/Session/setSession'
export const modalContext  = createContext()
const cx = className.bind(style)
function ProdItems({data}) {
    const url_delete = "https://64f1a79d0e1e60602d241398.mockapi.io/ecobazar/categories/product_type"
    return (  <>
        <tr >
            <td>{data.type_id}</td>
            <td>{data.name}</td>
            <td>
                <img src={data.thumbnail} alt="" />
            </td>
            <td className={cx('action')}>
                <Actions  get_id={data.id} link={Config.router.updateProTypes} onclick={()=>{setSession("product_type",data.id)}}  urlAPI={url_delete}></Actions>
            </td>
        </tr>
    </> );
}

export default ProdItems;
