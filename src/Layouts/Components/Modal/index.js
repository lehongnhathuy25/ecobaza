import className from 'classnames/bind'
import style from './modal.module.scss'
import Images from '~/assets/images'
import ProdDetail from '../ProdDetail'
const cx = className.bind(style)
function Modal({children,data={},onclick}) {
    return ( <>
       <div className={cx("modal")}>
        <div className={cx("modal-overlay")}></div>
        <div className={cx('modal-content')}>
                    <span  className={cx("modal-delete")} onClick={onclick}>
                        <img src={Images.X_icon} />
                    </span>
                   <ProdDetail data={data}>
                        {children}
                   </ProdDetail>
                </div>
       </div>
    </> );
}

export default Modal;
