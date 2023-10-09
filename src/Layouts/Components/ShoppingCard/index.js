import className from 'classnames/bind'
import style from './shoppingCard.module.scss'
import Images from '~/assets/images'
import {useState,useEffect} from 'react'
import { useSelector } from "react-redux";
import useTotal from '~/Hooks/useTotal'
import ShoppingCardItems from './ShoppingCardItems'
import { decrement} from "~/actions/shoppingCard";
import { useDispatch } from "react-redux";
import getUser from '~/components/getUser'
import Config from '~/config'
import ModalSearch from '../ModalSearch'
const cx = className.bind(style)
function ShoppingCard() {
    const [Modal,setModal] = useState(false)
    const [statusSearch,SetStatusSearch ]= useState(false)
    const counter = useSelector((state) => state.counter);
    const totalCard = useTotal(counter)
    const dispatch = useDispatch();
    const user = getUser()

    const removeCard = (key) =>{
        
        dispatch(decrement(key,user.id))
    }
  const cardItem = () =>{
   return  counter.map((card,index)=>(
        <ShoppingCardItems key={index} keys={index} onclick={removeCard} data={card} />
    ))
  }
    return (
        <>
        <div className={cx("card",['d-flex'])}>
        <div className={cx("search-mobile")} onClick={()=>SetStatusSearch(true)}>
            <img src={Images.Search_mobile} />
        </div>
            <div className={cx("card-like",['mr-16'])}>
                    <img src={Images.Heart} />
            </div>
            <div className={cx("card-list",['d-flex','align-center','ml-16'])} onClick={()=>{setModal(true)}} >
                <div className={cx('card-icon')}>
                    <img src={Images.Bag} />
                    <div className={cx("card-quality")}>{counter.length}</div>
                </div>
                <div className={cx("card-shopping",["hidden-lg-tablet"])}>
                    <div className={cx("card-tt")}>
                        Shopping card:
                    </div>
                    <div className={cx("card-price")}>
                        <span className={cx("currency")}>${totalCard}</span>
                        <span className={cx("cart-price-total")}></span>
                    </div>
                </div>
            </div> 
        </div>
            <div className={cx('modal')} style={Modal === true ? { transform: `translateX(0)`}:{ transform: `translateX(100%)`}}>
                <div className={cx("modal-overlay")} onClick={()=>{setModal(false)}} ></div>
                <div className={cx("card-content")}>
                    <div className={cx("card-tt")}>
                        <h3>Shopping card <span>({counter.length})</span></h3>
                        <span onClick={()=>{setModal(false)}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 25 25" fill="none">
                            <path d="M18.75 6.25L6.25 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M6.25 6.25L18.75 18.75" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </div>
                    <div className={cx('prod-list')}>
                        {cardItem()}
                    </div>
                    <div className={cx("prod-payment")}>
                        <div className={cx("count-card")}> Product</div>
                        <div className={cx("count-price")}>$ {totalCard}</div>
                    </div>
                    <a href={Config.router.checkout} className={cx("btn-checkout")}>Checkout</a>
                    <button className={cx("btn-toCard")}>Go to Cart</button>
                </div>
            </div>
        

        <ModalSearch status={statusSearch} onclick={()=>SetStatusSearch(false)} />
        </>
    )
}

export default ShoppingCard;
