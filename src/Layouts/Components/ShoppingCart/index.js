import className from 'classnames/bind'
import style from './shoppingCart.module.scss'
import Images from '~/assets/images'
const cx = className.bind(style)
function ShoppingCart() {
    return (
        <div className={cx("cart",['d-flex','align-center'])}>
            <div className={cx("cart-like",['mr-16'])}>
                    <img src={Images.Heart} />
            </div>
            <div className={cx("cart-list",['d-flex','align-center','ml-16'])}>
                <div className={cx('cart-icon')}>
                    <img src={Images.Bag} />
                    <div className={cx("cart-quality")}>2</div>
                </div>
                <div className={cx("cart-shopping")}>
                    <div className={cx("cart-tt")}>
                        Shopping cart:
                    </div>
                    <div className={cx("cart-price")}>
                        <span className={cx("currency")}>$</span>
                        <span className={cx("cart-price-total")}>57.00</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;
