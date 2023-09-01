import className from 'classnames/bind'
import style from './container.module.scss'
import Banner from '~/Layouts/Components/Banner'
const cx = className.bind(style)
function Container() {
    return (
        <div className={cx("content",["mt-24"])}>
            <div className={cx("container")}>
                <Banner></Banner>
            </div>
        </div>
    )
}

export default Container;
