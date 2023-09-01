import className from 'classnames/bind'
import style from './Navbar.module.scss'
import Images from '~/assets/images'
import NavbarItems from './NavItems'
const cx = className.bind(style)
function Navbar({children}) {
 
    return (
    <div className={cx('wraper')}>
        <div className={cx('container',['d-flex','justify-content-between',"align-center"])}>
            <ul className={cx('navbar',['d-flex'])}>
                <NavbarItems link={'#'} name={'Home'} active={'active'}>
                    <img className={cx("navbar-icon")} src={Images.DownIcon}/> 
              
                </NavbarItems>
                <NavbarItems link={'#'} name={'Shop'}>
                     <img className={cx("navbar-icon")} src={Images.DownIcon}/> 

                </NavbarItems>
                <NavbarItems link={'#'} name={'Pages'}>
              
                       <img className={cx("navbar-icon")} src={Images.DownIcon}/> 
                  
                </NavbarItems>
                <NavbarItems link={'#'} name={'Blog'}>
              
                       <img className={cx("navbar-icon")} src={Images.DownIcon}/> 
                   
                </NavbarItems>
                <NavbarItems link={'#'} name={'About Us'}></NavbarItems>
                <NavbarItems link={'#'} name={'Contact Us'}></NavbarItems>
            </ul>
            {children}
        </div>
    </div>
    )
}

export default Navbar;
