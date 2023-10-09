import className from 'classnames/bind'
import style from './ProdTypes.module.scss'
import {ProdTypeAPI} from '~/Api'
import ProdTypesItems from './ProdTypeItems'

const cx = className.bind(style)
function ProdTypes() {
  const prodType =  ProdTypeAPI()
  const handleProType = () =>{
    return prodType.map((prod, index) => (
          <ProdTypesItems data={prod} key={index} />
      ))

    
    
  }
    return (
        <div className={cx("prod-list",['mt-32'])}>
       
    
         {handleProType()}
        
        </div>
    )
}

export default ProdTypes;
