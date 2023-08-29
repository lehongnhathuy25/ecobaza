import className from 'classnames/bind'
import style from './header.module.scss'
const cx = className.bind(style)
function Header() {
    return  <div className={cx('header')}>
        header
    </div> ;
}

export default Header;
