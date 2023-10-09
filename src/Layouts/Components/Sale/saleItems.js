import className from 'classnames/bind'
import style from './sale.module.scss'

const cx = className.bind(style)
function Sale({children,title = "",content="",image=""}) {
    return ( 
        <div className={cx('sale-item')}>
        <div className={cx('sale-image')}>
            <img src={image} />
                <div className={cx("sale-content")}>
                    <p className={cx('sale-title')}>{title}</p>
                    <p className={cx('sale-ct')}>{content}</p>
                    {children}
                </div>
            </div>
        </div>
     );
}

export default Sale;
