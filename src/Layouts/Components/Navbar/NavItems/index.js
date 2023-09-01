import className from 'classnames/bind'
import style from './NavItems.module.scss'
import { Link } from "react-router-dom";
const cx = className.bind(style)
function NavItems({children,name,active=false,link="#"}) {
    return (  
        <li className={cx("navbar-list")}>
            <Link to={link} className={cx("navbar-link",[active])}   >{name}</Link>
            {children}
        </li>
    )
}

export default NavItems;
