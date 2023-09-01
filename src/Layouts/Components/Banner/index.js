import className from 'classnames/bind'
import style from './Banner.module.scss'
import Images from '~/assets/images'
const cx = className.bind(style)
function Banner({children}) {
    return (
        <div className={cx("banner",["d-flex",])}>
            <div className={cx("block-left",["col-6-x"])}>
                <div className={cx("banner-img")}>
                    <img src={Images.Banner_1} alt=""/>
                    <div className={cx("banner-title")}>
                            <div className={cx("banner-tt")}>
                            Fresh & Healthy <p>Organic Food</p>
                            </div>
                            <div className={cx("banner-ct")}>
                                Sale up to <span className={cx("sale-off")}>30% OFF</span>
                                <p  className={cx("freeship")}>Free shipping on all your order.</p>
                            </div>
                          
                            <button className={cx("btn btn-now",['d-flex','align-center',"justify-content-center"])}>
                                    <span className={cx("mr-16")}>Shop now</span>
                                    <span className={cx("mt-2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                        <path d="M16 7.50055H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.95001 1.47552L16 7.49953L9.95001 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                    </div>
                </div>
            </div>
            <div className={cx("block-right",["col-2-x","d-flex","flex-column","top"])}>
            <div className={cx("banner-img",["top"])}>
                    <img src={Images.Banner_2} alt=""/>
                    <div className={cx("banner-title")}>
                         
                            <div className={cx("banner-ct")}>
                            Summer Sale <p className={cx("sale-off")}>75% OFF</p>
                                <p  className={cx("freeship")}>Only Fruit & Vegetable</p>
                            </div>
                            <button className={cx("btn",['d-flex','align-center',"justify-content-center","btn-now"])}>
                                    <span className={cx("mr-16")}>Shop now</span>
                                    <span className={cx("mt-2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                        <path d="M16 7.50055H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.95001 1.47552L16 7.49953L9.95001 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                    </div>
            </div>
                <div className={cx("banner-img",["bottom"])}>
                        <img src={Images.Banner_3} alt=""/>
                            <div className={cx("banner-title")}>
                            <div className={cx("banner-tt")}>Best Deal</div>
                            <div className={cx("banner-ct")}>Special Products Deal of the Month</div>
                            <button className={cx("btn",['d-flex','align-center',"justify-content-center","btn-now"])}>
                                    <span className={cx("mr-16")}>Shop now</span>
                                    <span className={cx("mt-2")}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none">
                                        <path d="M16 7.50055H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9.95001 1.47552L16 7.49953L9.95001 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </span>
                            </button>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Banner;
