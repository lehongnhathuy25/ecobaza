import className from 'classnames/bind'
import style from './ProdTypes.module.scss'
import {Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import {memo} from 'react'
const cx = className.bind(style)
function ProdTypeItems({data={}}) {
    return (
   
            <a className={cx("prod-item",["d-flex","align-center",'flex-column'])}>
                <div className={cx("prod-image")}>
                    <img src={data.thumbnail} alt="" />
                </div>
                <p className={cx("prod-name")}>{data.name}</p>
            </a>
       
      );
}

export default memo(ProdTypeItems) ;
