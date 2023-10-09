import SideBar from './SideBar'
import className from 'classnames/bind'
import style from './layouts.module.scss'

const cx = className.bind(style)
function Layouts({children}) {
    return <div className="d-flex">
                <SideBar></SideBar>
                <div className={cx("wraper",['col-8'])}>
                    {children}
                </div>
            </div>
}

export default Layouts;
