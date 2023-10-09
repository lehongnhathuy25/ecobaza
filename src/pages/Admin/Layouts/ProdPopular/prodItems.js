import Actions from '../../components/actions'
import Config from '~/config';
import setSession from '~/Session/setSession'
import className from 'classnames/bind'
import style from './prodPopular.module.scss'


import UpdateAPI from "~/Api/UpdateAPI"
const cx = className.bind(style)
function ProdItems({data={}}) {
    const url_delete = "https://64f1a79d0e1e60602d241398.mockapi.io/ecobazar/categories/product_popular"
    const handleStatus = (id) =>{
        if(id === data.id){
          var status = data.status
            if(data.status === true){
                data.status = false
                status = data.status
            }
            else{
                data.status = true
                status = data.status
            }
            const url = `product_popular/${id}`
            const FormData= {
                status
            }
          UpdateAPI(FormData,url)
          setTimeout(() => {
            window.location.reload();
        },800)
        }
    }
    return (  <tr >
        <td>{data.type_id}</td>
        <td>{data.name}</td>
        <td>
            <img src={data.thumbnail} alt="" />
        </td>
        <td>${data.newPrice} </td>
        <td className={cx("status",["d-flex", "justify-content-center" ])}>
            <div className={cx("status-toggle")} onClick={()=>{handleStatus(data.id)}}  style={data.status  ===  true ? {backgroundColor:"#00B207"}:{backgroundColor:"red"}}>
                <span style={data.status  ===  true ? {right:".6rem"}:{left:".6rem"}}></span>
            </div>
        </td>
        <td className={cx('action')}>
            <Actions urlAPI={url_delete} get_id={data.id} link={Config.router.updateProPopular} onclick={()=>{setSession("product_popular",data.id)}}></Actions>
        </td>
    </tr> );
}

export default ProdItems;
