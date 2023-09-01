import className from 'classnames/bind'
import style from './container.module.scss'
import Banner from '~/Layouts/Components/Banner'
import Options from '~/Layouts/Components/Options'
import Images from '~/assets/images'
const cx = className.bind(style)
function Container() {
    return (
        <div className={cx("content",["mt-24"])}>
            <div className={cx("container")}>
                <Banner></Banner>
                <div className={cx("option")}>
                <div className={cx("option-list")}>
                    <Options icon={Images.Option_1} tt={"Free Shipping"} ct={"Free shipping on all your order"}></Options>
                    <Options icon={Images.Option_2} tt={"Customer Support 24/7"} ct={"Instant access to Support"}></Options>
                    <Options icon={Images.Option_3} tt={"100% Secure Payment"} ct={"We ensure your money is save"}></Options>
                    <Options icon={Images.Option_4} tt={"Money-Back Guarantee"} ct={"30 Days Money-Back Guarantee"}></Options>
                </div>
                </div>
                
            </div>
        </div>
    )
}

export default Container;
