import className from 'classnames/bind'
import style from './searchModal.module.scss'
import Images from '~/assets/images'

const cx = className.bind(style)
function ModalSearch({status,onclick}) {
    return ( <>
        {status ? (
            <div className={cx("search-modal")}>
    <div className={cx("search-modal-overlay")} onClick={onclick}></div>
    <div className={cx("search-modal-content")}>
    <div className={cx("search-modal-remove")} onClick={onclick}>
        <img src={Images.X_icon} />
    </div>
        <div className={cx("search-modal-banner")}>
            <img src={Images.Search_banner} />
        </div>
        <div className={cx("search-modal-input")}>
            <input type="text" placeholder="search" />
        </div>
        <button className={cx("search-modal-button")}>
          Search
        </button>
    </div>
</div> 
        ):('')}
    </>);
}

export default ModalSearch;
