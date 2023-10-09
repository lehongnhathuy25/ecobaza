import className from 'classnames/bind'
import style from './users.module.scss'
import Content from '../Content'
import Cart from '../../components/Cart'
import UserAPI from '~/Api/UserAPI'
import UserItems from './userItems'
import Config from '~/config'
const cx = className.bind(style)
function Users() {
    const userList = UserAPI()
    const getList = () =>{
       return  userList.map((user,index)=>(
            <UserItems key={index} data={user} />
        ))
    }
    return ( 
        <Content >
            <Cart title={"USER MANAGER"} link={Config.router.signUp} >
            <thead>
                    <tr>
                    <th>id</th>
                        <th>UserName</th>
                        <th>PassWord</th>
                        <th>Create Day</th>
                        <th>
                            Action
                        </th>
                    </tr>
                    </thead>
                <tbody>
                    {getList()}
                </tbody>
            </Cart>
        </Content>
     );
}

export default Users;
