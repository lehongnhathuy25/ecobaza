import className from 'classnames/bind'
import style from './rules.module.scss'
import { forwardRef} from 'react'
const cx = className.bind(style)
function Rules({children,type="",name="", placeholder="",label="",onchange,value,comp},ref) {
    
    return (
        <div className={cx("form-group")}>
            <label className={cx("label")}>{label}</label>
            <input autoComplete="disabled"  ref={ref} type={type} name={name} value={value} placeholder={placeholder} onChange={onchange} />
            {children}
        </div>
      
    )
}

export default  forwardRef(Rules);
