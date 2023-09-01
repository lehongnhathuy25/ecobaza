import className from 'classnames/bind'
import style from './header.module.scss'
import Images from '~/assets/images'
import Search from '~/Layouts/Components/Search'
import ShoppingCart from '~/Layouts/Components/ShoppingCart'
import Navbar from '~/Layouts/Components/Navbar'
const cx = className.bind(style)
function Header() {
    console.log(Images)
    return  <div className={cx('header')}>
                <div className={cx('header-top')}>
                    <div className={cx('container',['d-flex','justify-content-between'])}>
                        <div className={cx('block-left',['d-flex','align-item'])}>
                            <img src={Images.MapIcon} />
                            <span className={cx("tt")}>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                        </div>
                        <div className={cx("block-right",['d-flex','align-item'])}>
                            <ul className={cx("nav",['d-flex','align-item','mr-20'])}>
                                <li className={cx("nav-item",['mr-20'])}> 
                                <a  href="#" className={cx("nav-link",)}>
                                        <span className={cx("mr-6")}>Eng</span>
                                        <span className={cx("nav-icon")}>
                                        <img src={Images.DownIcon} />
                                        </span>
                                </a>
                                </li>
                                <li className={cx("nav-item")}> 
                                    <a  href="#" className={cx("nav-link")}>
                                    <span className={cx("mr-6")}>USD</span>
                                        <span className={cx("nav-icon")}>
                                        <img src={Images.DownIcon} />
                                        </span>
                                    </a>
                                </li>
                            </ul>
                            <ul className={cx("nav",['d-flex','align-item','ml-20'])}>
                                <li className={cx("nav-item",)}> 
                                    <a  href="#" className={cx("nav-link")}>
                                        <span>Sign In</span>
                                    </a>
                                </li>
                                <span className={cx('line')}>/</span>
                                <li className={cx("nav-item")}> 
                                    <a  href="#" className={cx("nav-link")}>
                                        <span>Sign Up</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={cx('header-bottom')}>
                    <div className={cx('container',['d-flex','justify-content-between'])}>
                        <div className={cx("header-logo")}>
                            <img src={Images.Logo} />
                        </div>
                        <Search >
                            <button className={cx("btn-search")}>Search</button>
                        </Search>
                        <ShoppingCart />
                    </div>
                </div>
                <Navbar>
                <div className={cx("contact",['d-flex',"align-center"])}>
                    <span className={cx("nav-icon")}>
                        <img src={Images.Phone} alt="" />
                    </span>
                    <span className={cx("contact-number")}>(219) 555-0114</span>
                </div>
                </Navbar>
                
        </div> 
}

export default Header;
