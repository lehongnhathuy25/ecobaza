import className from "classnames/bind";
import style from "./contact.module.scss";
import Image from "~/assets/images";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
const cx = className.bind(style);
function Contact() {
  return (
    <div className={cx("contact")}>
      <div className={cx("logo-list")}>
        <div className={cx("container", ["container-logo"])}>
          <Swiper  slidesPerView={2} breakpoints={{
            450:{
              slidesPerView:3,
            },
            600:{
              slidesPerView:4,
            },
             768:{
            slidesPerView: 5,
        },
          }} >
            <SwiperSlide>
              <div className={cx("logo-item")}>
                <img src={Image.brand_1} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("logo-item")}>
                <img src={Image.brand_2} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("logo-item")}>
                <img src={Image.brand_3} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("logo-item")}>
                <img src={Image.brand_4} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("logo-item")}>
                <img src={Image.brand_5} />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={cx("logo-item")}>
                <img src={Image.brand_6} />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className={cx("follow")}>
        <div className={cx("container", ["container-logo"])}>
          <h3 className={cx("follow-title")}>Follow us on Instagram</h3>
          <div className={cx("logo-list")}>
          <Swiper    slidesPerView={2} spaceBetween={30} breakpoints={{
        
        690:{
          slidesPerView: 3,
        },
         
        1024:{
          slidesPerView: 4,
        },
        1200:{
          slidesPerView: 5,
        },
      }}>
            <SwiperSlide>
            <div className={cx("logo-item")}>
              <img src={Image.ins_1} />
              <div className={cx("ins-logo")}>
                <img src={Image.ins_logo} />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={cx("logo-item")}>
              <img src={Image.ins_2} />
              <div className={cx("ins-logo")}>
                <img src={Image.ins_logo} />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={cx("logo-item")}>
              <img src={Image.ins_3} />
              <div className={cx("ins-logo")}>
                <img src={Image.ins_logo} />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={cx("logo-item")}>
              <img src={Image.ins_4} />
              <div className={cx("ins-logo")}>
                <img src={Image.ins_logo} />
              </div>
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={cx("logo-item")}>
              <img src={Image.ins_5} />
              <div className={cx("ins-logo")}>
                <img src={Image.ins_logo} />
              </div>
            </div>
            </SwiperSlide>
           
          </Swiper>
            
            
           
          
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
