import Cart from '../../components/Cart'
import Config from '~/config';
import Content from '../Content'
import className from 'classnames/bind'
import style from './prodTypes.module.scss'
import ProdItems from './prodItems'
import { ProdTypeAPI} from '~/Api'
const cx = className.bind(style)
function ProductTypes() {
    const prodList = ProdTypeAPI()
    const getProdtype = ()=>{
        return   prodList.map((prod,index)=>(
            <ProdItems key={index} data={prod} />
        ))
    }
    return (
        <Content >
                <Cart title={"PRODUCT TYPE"}  link={Config.router.addProTypes}>
                <thead>
                    <tr>
                            <th>Type ID</th>
                            <th>Name</th>
                            <th>Thumbail</th>
                         
                            <th>Action
                            </th>
                        </tr>
                    </thead>
                    {prodList.length >0 ? (
                        <tbody>
                            { getProdtype()}
                        </tbody>
                    ):(
                    <tbody>
                    <tr>
                        <td>
                            <div className="w-100 text-center" href="" >No Data</div>
                        </td>
                    </tr>
                    </tbody>
                   
                    )}
            </Cart>
        </Content>
    )
}

export default ProductTypes;
