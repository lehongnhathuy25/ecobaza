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
                </div>
            </div>
            <div className={cx("block-right",["col-2-x","d-flex","flex-column"])}>
            <div className={cx("banner-img")}>
                    <img src={Images.Banner_2} alt=""/>
            </div>
            <div className={cx("banner-img")}>
                    <img src={Images.Banner_3} alt=""/>
            </div>
            </div>
            
        </div>
    )
}

export default Banner;
