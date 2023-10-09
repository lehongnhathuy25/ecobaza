import className from 'classnames/bind'
import style from './submit.module.scss'
const cx = className.bind(style)
function Submit({onclick,link="#",tt1="",tt2=""}) {
    return ( <>
         <div className={cx("submit")}>
                <button className={cx("btn",['btn-add']) } onClick={onclick}>{tt1}</button>
                <a href={link} className={cx("btn",['btn-exit'])}>{tt2}</a>
            </div>
    </> );
}

export default Submit;
