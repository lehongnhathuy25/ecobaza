import className from "classnames/bind";
import style from "./footer.module.scss";
import Image from "~/assets/images";
const cx = className.bind(style);
function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("container")}>
        <div className={cx("footer-top")}>
          <div className={cx("footer-logo")}>
            <img src={Image.Logo_footer} />
            <span className={cx("footer-logo-title")}>Ecobazar</span>
            
            <div className={cx("footer-ct")}>
              Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
              dui, eget bibendum magna congue nec.
            </div>
            <div className={cx("footer-contact")}>
              <span className={cx("contact-number")}>(219) 555-0114</span>
              <span className={cx("or")}>or</span>
              <span className={cx("contact-email")}>Proxy@gmail.com</span>
            </div>
          </div>
          <ul className={cx("footer-nav")}>
            <li className={cx("text-bold",["mb-20"])}>
                <a href="#" style={{color:"white"}} >My Account</a>
            </li>
            <li>
                <a href="#" >My Account</a>
            </li>
            <li>
                <a href="#" >Order History</a>
            </li>
            <li>
                <a href="#" >Shoping card</a>
            </li>
            <li>
                <a href="#" >WishList</a>
            </li>
          </ul>
          <ul className={cx("footer-nav")}>
            <li className={cx("text-bold",["mb-20"])}>
                <a href="#" style={{color:"white"}} >Help</a>
            </li>
            <li>
                <a href="#" >Contact</a>
            </li>
            <li>
                <a href="#" >Faqs</a>
            </li>
            <li>
                <a href="#" >Term & Condition</a>
            </li>
            <li>
                <a href="#" >Privacy</a>
            </li>
          </ul>
          <ul className={cx("footer-nav")}>
            <li className={cx("text-bold",["mb-20"])}>
                <a href="#" style={{color:"white"}} >Proxy</a>
            </li>
            <li>
                <a href="#" >About</a>
            </li>
            <li>
                <a href="#" >Shop</a>
            </li>
            <li>
                <a href="#" >Product</a>
            </li>
            <li>
                <a href="#" >Track Order</a>
            </li>
          </ul>
          <ul className={cx("footer-nav")}>
            <li className={cx("text-bold",["mb-20"])}>
                <a href="#" style={{color:"white"}} >Categories</a>
            </li>
            <li>
                <a href="#" >Fruit & Vegetables</a>
            </li>
            <li>
                <a href="#" >Meat & Fish</a>
            </li>
            <li>
                <a href="#" >Bread & Bakery</a>
            </li>
            <li>
                <a href="#" >Beauty & Health</a>
            </li>
          </ul>
        </div>
        <div className={cx("footer-bottom")}>
            <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          
        </div>
        
      </div>
    </div>
  );
}

export default Footer;
