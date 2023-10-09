import className from 'classnames/bind'
import style from './account.module.scss'

import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import LogOut from './LogOut'
const cx = className.bind(style)
function Account({nameUser}) {
 
    return ( 
        <>
           <Tippy 
            content={ <LogOut />}
            trigger={"click"}
            interactive= {true}
            className={"custom-tooltip-class"}
           >
            <div className={cx('account')}>
            <Tippy content={nameUser}>
                <div className={cx('account-name')}>{nameUser.charAt(0)}
                </div> 
                </Tippy>
            </div>
           </Tippy>
            
        
        </>
    );
}

export default Account;
