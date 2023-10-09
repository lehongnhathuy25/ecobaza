import className from 'classnames/bind'
import style from './menu.module.scss'
import NavItems from "~/Layouts/Components/Navbar/NavItems"
import Images from '~/assets/images'
import Config from '~/config'
const cx = className.bind(style)
function Menu({children}) {
    return <ul className={cx("menu_dashboard")}>
            <NavItems link={Config.router.admin} name={"Product Type"}>
            </NavItems>
            <NavItems link={Config.router.productPopular}  name={"Product Popular"}></NavItems>
            <NavItems link={Config.router.usersManager}  name={"Users Manager"}></NavItems>
    </ul>
}

export default Menu;
