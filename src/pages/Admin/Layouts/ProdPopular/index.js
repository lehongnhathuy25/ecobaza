import Cart from '../../components/Cart'
import className from 'classnames/bind'
import style from './prodPopular.module.scss'
import Config from '~/config';
import Content from '../Content'
import  Product from '~/Api/Product'
import ProdItems from './prodItems'
const cx = className.bind(style)
function ProductPopular() {
    const prodList = Product ()
   const getList = () =>{
    return  prodList.map((prod,index)=>(
        <ProdItems data={prod} key={index}/>
    ))
   }
    return ( 
        <Content >
            <Cart  title={"PRODUCT POPULAR"}  link={Config.router.addProdPopular} >
            <thead>
                    <tr>
                        <th>Type ID</th>
                        <th>Name</th>
                        <th>Thumbail</th>
                        
                        <th>Price</th>
                        <th>Status</th>
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

export default ProductPopular;
