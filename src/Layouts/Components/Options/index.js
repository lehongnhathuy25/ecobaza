import className from 'classnames/bind'
import style from './options.module.scss'

const cx = className.bind(style)
function Options({icon={},tt="", ct=""}) {
   
    return (
                <div className={cx("option-item",["d-flex","align-center"])}>
                    <div  className={cx("option-image",['mr-16'])}>
                        <img src={icon} alt="" />
                    </div>
                    <div className={cx("option-title")}>
                        <p className={cx("option-tt")}>{tt}</p>
                        <p className={cx("option-ct")}>{ct}</p>
                    </div>
                </div>
    )
}

export default Options;
