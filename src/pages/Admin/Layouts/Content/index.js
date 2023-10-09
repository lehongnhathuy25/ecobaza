import className from 'classnames/bind'
import style from './content.module.scss'
import Images from '~/assets/images'
import Cart from '../../components/Cart'
import Config from '~/config';
const cx = className.bind(style)
function Content({children}) {
    return (
        <div className={cx('content')}>
            <div className={cx("content-top",['d-flex', ,'align-center',' justify-content-between'])}>
                <div className={cx("block-left")}>
                    <img src={Images.Bell_icon} alt="" />
                </div>
                <div className={cx("block-right")}>
                    <img src={Images.User_icon} alt="" />
                </div>
            </div>
            <div className={cx("content-bottom")}>
                {children}
            </div>
        </div>
    )
}

export default Content;
