import className from 'classnames/bind'
import style from './NavItems.module.scss'
import { Link } from "react-router-dom";
const cx = className.bind(style)
function NavItems({children,name,active=false,link,classMobile}) {
    return (  
        <li className={cx("navbar-list",[classMobile])}>
            <a href={link} className={cx("navbar-link",[active])}   >{name}</a>
            {children}
        </li>
    )
}

export default NavItems;
