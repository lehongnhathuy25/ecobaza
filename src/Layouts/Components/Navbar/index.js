import className from "classnames/bind";
import style from "./Navbar.module.scss";
import Images from "~/assets/images";
import NavbarItems from "./NavItems";
import Config from "~/config";
import ModalMobile from "../ModalMobile";
import { useState } from "react";
const cx = className.bind(style);
function Navbar({ children }) {
  const [modalMenu, setModalMenu] = useState(false);
  return (
    <div className={cx("wraper")}>
      <div
        className={cx("container", [
          "d-flex",
          "justify-content-between",
          "align-center",
        ])}
      >
        <div
          className={cx("menu-mobile", ["hidden-pc"])}
          onClick={() => setModalMenu(true)}
        >
          <img src={Images.Menu_mobile} />
        </div>
        <ul className={cx("navbar", ["d-flex", "hidden-lg-tablet"])}>
          <NavbarItems
            link={Config.router.home}
            name={"Home"}
            active={"active"}
          >
            <img className={cx("navbar-icon")} src={Images.DownIcon} />
          </NavbarItems>
          <NavbarItems link={Config.router.shop} name={"Shop"}>
            <img className={cx("navbar-icon")} src={Images.DownIcon} />
          </NavbarItems>
          <NavbarItems link={"#"} name={"Pages"}>
            <img className={cx("navbar-icon")} src={Images.DownIcon} />
          </NavbarItems>
          <NavbarItems link={"#"} name={"Blog"}>
            <img className={cx("navbar-icon")} src={Images.DownIcon} />
          </NavbarItems>
          <NavbarItems link={"#"} name={"About Us"}></NavbarItems>
          <NavbarItems link={"#"} name={"Contact Us"}></NavbarItems>
        </ul>

        <ModalMobile
          showModal={modalMenu}
          removeModal={() => setModalMenu(false)}
        >
          <ul className={cx("navbar-mobile")}>
            <NavbarItems
              classMobile={"navbar-list-mobile"}
              link={Config.router.home}
              name={"Home"}
            >
              <img className={cx("navbar-icon")} src={Images.DownIcon} />
            </NavbarItems>
            <NavbarItems
              classMobile={"navbar-list-mobile"}
              link={Config.router.shop}
              name={"Shop"}
            >
              <img className={cx("navbar-icon")} src={Images.DownIcon} />
            </NavbarItems>
            <NavbarItems
               classMobile={"navbar-list-mobile"}
              link={"#"}
              name={"Pages"}
            >
              <img className={cx("navbar-icon")} src={Images.DownIcon} />
            </NavbarItems>
            <NavbarItems   classMobile={"navbar-list-mobile"} link={"#"} name={"Blog"}>
              <img className={cx("navbar-icon")} src={Images.DownIcon} />
            </NavbarItems>
            <NavbarItems
               classMobile={"navbar-list-mobile"}
              link={"#"}
              name={"About Us"}
            ></NavbarItems>
            <NavbarItems
               classMobile={"navbar-list-mobile"}
              link={"#"}
              name={"Contact Us"}
            ></NavbarItems>
          </ul>
        </ModalMobile>

        {children}
      </div>
    </div>
  );
}

export default Navbar;
