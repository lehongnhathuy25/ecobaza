import className from "classnames/bind";
import style from "./submitCard.module.scss";
import Images from "~/assets/images";
import ProdDetail from "../ProdDetail";
import { useDispatch } from "react-redux";
import { increment} from "~/actions/shoppingCard";
import {useState} from 'react'
const cx = className.bind(style);
function SubmitCard({data={},user,onclick}) {
    const [amount,setAmount] = useState(1)
    const dispatch = useDispatch();
    const subProd = () =>{
    if(amount <= 1){
      setAmount(1)
    }
    else{
      setAmount((prev)=> prev -1 )
    }
  }
  const sumProd = () =>{
    setAmount((prev)=> prev +1 )
  } 
   const handleSubmit = () =>{
    data.amount = amount
    dispatch(increment(data,user.id))
    setAmount(1)
  }
  return (
    <>
      <div className={cx("modal-submit")}>
        <div className={cx("amount")}>
          <button className={cx("amount-sub")} onClick={subProd}>-</button>
          <span className={cx("amount-sum")}>{amount}</span>
          <button className={cx("amount-add")} onClick={sumProd}>+</button>
        </div>
        <div className={cx("modal-addTo")} onClick={handleSubmit}>
          <button className={cx("modal-addTo-card")} onClick={onclick} >
            <span className={cx("addTo-card-title")} >Add to Cart</span>
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="17"
                height="18"
                viewBox="0 0 17 18"
                fill="none"
              >
                <path
                  d="M5.16667 7.33333H2.66667L1 16.5H16L14.3333 7.33333H11.8333M5.16667 7.33333V4.83333C5.16667 2.99239 6.65905 1.5 8.5 1.5V1.5C10.3409 1.5 11.8333 2.99238 11.8333 4.83333V7.33333M5.16667 7.33333H11.8333M5.16667 7.33333V9.83333M11.8333 7.33333V9.83333"
                  stroke="white"
                  strokeWidth="1.3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
        <div className={cx("card-heart")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M9.9996 17.5451C-6.66672 8.33336 4.99993 -1.66664 9.9996 4.65674C14.9999 -1.66664 26.6666 8.33336 9.9996 17.5451Z"
              stroke="#2C742F"
              strokeWidth="1.5"
            />
          </svg>
        </div>
      </div>
      <div className={cx("card-category")}>
        <span className={cx("card-category-title")}>categories:</span>
        <span className={cx("card-category-type")}> </span>
      </div>
      <div className={cx("card-tag")}>
        <span className={cx("card-tag-title")}>Tag:</span>
        <span> ,</span>
        <span> Healthy,</span>
        <span> </span>
      </div>
    </>
  );
}

export default SubmitCard;
