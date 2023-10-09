import className from 'classnames/bind'
import style from './header.module.scss'
import {useState, useEffect} from 'react'
import Images from '~/assets/images'
import Search from '~/Layouts/Components/Search'
import ShoppingCard from '~/Layouts/Components/ShoppingCard'
import Navbar from '~/Layouts/Components/Navbar'
import Config from '~/config'

import Account from '../../Components/Account'
import getUser from '~/components/getUser'

const cx = className.bind(style)
function Header() {
    const user = getUser()
  
    return  <div className={cx('header')}>
                <div className={cx('header-top')}>
                    <div className={cx('container',['d-flex','justify-content-between'])}>
                        <div className={cx('block-left',['d-flex','align-center'])}>
                            <img src={Images.MapIcon} />
                            <span className={cx("tt",['hidden-mobile'])}>Store Location: Lincoln- 344, Illinois, Chicago, USA</span>
                        </div>
                        <div className={cx("block-right",['d-flex','align-center'])}>
                      
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
                            {user  ? (
                            <Account nameUser={user.username ? user.username : ''} />
                        ): (
                            <ul className={cx("nav",['d-flex','align-item','ml-20'])}>
                                <li className={cx("nav-item",)}> 
                                    <a  href={Config.router.signIn} className={cx("nav-link")}>
                                        <span>Sign In</span>
                                    </a>
                                </li>
                                <span className={cx('line')}>/</span>
                                <li className={cx("nav-item")}> 
                                    <a  href={Config.router.signOut} className={cx("nav-link")}>
                                        <span>Sign Up</span>
                                    </a>
                                </li>
                            </ul>
                        )}  
                        </div>
                    </div>
                </div>
                <div className={cx('header-bottom')}>
                    <div className={cx('container',['d-flex','justify-content-between'])}>
                        <a href={Config.router.home} className={cx("header-logo")}>
                            <img src={Images.Logo} />
                        </a>
                        <Search >
                            <button className={cx("btn-search")}>Search</button>
                        </Search>

                        <ShoppingCard  />
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
