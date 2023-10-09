import className from 'classnames/bind'
import style from './users.module.scss'
import Actions from '../../components/actions'
import Config from '~/config'
import setSession from '~/Session/setSession'

const cx = className.bind(style)

function UserItems({data={}}) {
    const url_delete="https://650917fdf6553137159af551.mockapi.io/ecobazar/user"
    return ( 
        <>
            <tr>
                <td>{data.id}</td>
                <td>{data.username}</td>
                <td>{data.password}</td>
                <td>{data.createdAt}</td>
                <td>
                    <Actions get_id={data.id} link={Config.router.updateUser}  onclick={()=>{setSession("user",data.id)}} urlAPI={url_delete} ></Actions>
                </td>
            </tr>
        </>
     );
}

export default UserItems;
