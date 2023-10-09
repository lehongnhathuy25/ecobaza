import className from 'classnames/bind'
import style from './sale.module.scss'
import SaleItems from './saleItems'
import Images from '~/assets/images'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
const cx = className.bind(style)

function Sale() {
    
    return ( 
        <div className={cx('sale',['mt-60'])} >
        <Swiper  slidesPerView={1}  spaceBetween={30} breakpoints={{
            510:{
                slidesPerView:2
            },
            1024:{
                slidesPerView:3
            }
        }}>
            <SwiperSlide>
                <SaleItems image={Images.Sale_image_1} title={"Best Deals"} content="Sale of the Month" >
                <p className={cx('sale-start')}>Started at <span>$68.99</span></p>
                    <button className="btn btn-now d-flex align-center justify-content-center"><span className="mr-16">Shop now</span><span className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M16 7.50055H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.95001 1.47552L16 7.49953L9.95001 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
                </SaleItems>
            </SwiperSlide>
            <SwiperSlide>
            <SaleItems image={Images.Sale_image_2} title={"Best Deals"} content="Sale of the Month" >
                <p className={cx('sale-start')}>Started at <span>$79.99</span></p>
                <button className="btn btn-now d-flex align-center justify-content-center"><span className="mr-16">Shop now</span><span className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M16 7.50055H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.95001 1.47552L16 7.49953L9.95001 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
            </SaleItems>
            </SwiperSlide>
            <SwiperSlide>
            <SaleItems image={Images.Sale_image_3} title={"Best Deals"} content="Sale of the Month" >
                <p className={cx('sale-upto')}>Up to <span>64% OFF</span></p>
                <button className="btn btn-now d-flex align-center justify-content-center"><span className="mr-16">Shop now</span><span className="mt-2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 17 15" fill="none"><path d="M16 7.50055H1" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path><path d="M9.95001 1.47552L16 7.49953L9.95001 13.5245" stroke="#00B307" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg></span></button>
            </SaleItems>
            </SwiperSlide>
        </Swiper>
          
          
         
        </div>
     );
}

export default Sale;
