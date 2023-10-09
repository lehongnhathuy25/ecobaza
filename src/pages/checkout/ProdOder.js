import className from "classnames/bind";
import style from "./checkout.module.scss";


import { useSelector } from "react-redux";
const cx = className.bind(style);
function ProdOrder({children, data = {} }) {
  return (
    <div className={cx("order-item")}>
      <div className={cx("order-image")}>
        <img src={data.thumbnail} />
        <div className={cx("order-name")}>
          {data.name} x {data.amount}
        </div>
      </div>
      
        <div className={cx("order-price")}>${data.newPrice}</div>
    </div>
  );
}

export default ProdOrder;
