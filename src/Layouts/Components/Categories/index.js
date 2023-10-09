
import className from 'classnames/bind'
import style from './categories.module.scss'
const cx = className.bind(style)
function Categories({title="",children}) {

    return (
        <div className={cx("categories")}>
            <div className={cx("categories-title")}>{title}</div>
                {children}
        </div>
    )
}

export default Categories;
