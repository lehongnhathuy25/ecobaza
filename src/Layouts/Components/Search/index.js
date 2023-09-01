import className from 'classnames/bind'
import style from './search.module.scss'
import Images from '~/assets/images'
const cx = className.bind(style)
function Search({children}) {
    return (
        <>

        <div className={cx("search",['d-flex'])}>
            <div className={cx("search-content",['d-flex','align-center'])}>
            <span className={cx("search-icon")}>
                <img src={Images.Search} />
            </span>
                <input type="text" className={cx("search-input")} placeholder="Search" />
            </div>
        {children}
        </div>
        </>
    )
}

export default Search;
