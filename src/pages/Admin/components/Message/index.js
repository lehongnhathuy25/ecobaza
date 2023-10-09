import className from 'classnames/bind'
import style from './message.module.scss'

const cx = className.bind(style)
function Message({children,message,status, onclick}) {
    return (
        <div className={cx("message") } style={status === true ?{ transform: `translateX(0)`}:{ transform: `translateX(100%)`}}>
        <div className={cx("message-content")}>
            {children}
            <div>
                 <p>{message}</p>
                 <a>See additional data details here!</a>
            </div>
            <span className={cx("message-deleted")} onClick={onclick}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 256 256" id="x"><rect width="256" height="256" fill="none"></rect><line x1="200" x2="56" y1="56" y2="200" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line><line x1="200" x2="56" y1="200" y2="56" fill="none" stroke="red" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24"></line></svg>
            </span>
        </div>
        </div>
    )

}

export default Message;
