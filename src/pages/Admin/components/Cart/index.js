import className from 'classnames/bind'
import style from './cart.module.scss'


import { Link } from "react-router-dom";

import { ProdTypeAPI} from '~/Api'
const cx = className.bind(style)
function Cart({title="",children,link="#"}) {
    return (
        <div className={cx('cart')}>
                <div className={cx("cart-title")}>
                    <h3>{title}</h3>
                    <Link to={link}  className={cx("btn-add")}>
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="plus"><g data-name="Layer 2"><g data-name="plus"><rect width="24" height="24" opacity="0" transform="rotate(180 12 12)"></rect><path d="M19 11h-6V5a1 1 0 0 0-2 0v6H5a1 1 0 0 0 0 2h6v6a1 1 0 0 0 2 0v-6h6a1 1 0 0 0 0-2z"></path></g></g></svg>
                        </span>
                    <span>Add New</span>
                    </Link>
                </div>
                <div className={cx("cart-body")}>
                <table>
                   {children}
                </table> 
                </div>
            </div>
    )
}

export default Cart;
