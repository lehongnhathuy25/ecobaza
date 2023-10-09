import className from 'classnames/bind'
import style from './sideBar.module.scss'
import Menu from "../../components/Menu";
import Images from '~/assets/images';
import Config from '~/config'
const cx = className.bind(style)
function SideBar() {
    return (
        <div className={cx("sideBar",["col-2"])}>
            <div className={cx('sideBar-logo')}>
                <a href={Config.router.home}>
                <img src={cx( Images.Logo)} />    
                </a>
            </div>
            <Menu ></Menu>
        </div>
    )
}

export default SideBar;
