import className from "classnames/bind";
import style from "./checkout.module.scss";

import ProdOrder from "./ProdOder";
import { useSelector } from "react-redux";
import useTotal from "~/Hooks/useTotal";
import { useForm } from "react-hook-form";

const cx = className.bind(style);
function Checkout() {
  const counter = useSelector((state) => state.counter);
  const total = useTotal(counter);
  const handleOrder = () => {
    return counter.map((item, index) => (
      <ProdOrder data={item} key={index}></ProdOrder>
    ));
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <div className={cx("container", ["mt-24"])}>
        <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
          <div className={cx("cus-infor")}>
            <div className={cx("form-group", ["row-3"])}>
              <div className={cx("form-control")}>
                <label>First name</label>
                <input
                  type="text"
                  placeholder="Your first name"
                  className={cx("form-input")}
                  {...register("firstname", {
                    required: "First Name is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.firstname && (
                  <div className={cx("error-message")} role="alert">
                    {errors.firstname?.message}
                  </div>
                )}
              </div>
              <div className={cx("form-control")}>
                <label>Last name</label>
                <input
                  type="text"
                  placeholder="Your Last Name"
                  className={cx("form-input")}
                  {...register("lastname", {
                    required: "Last name is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.lastname && (
                  <div className={cx("error-message")} role="alert">
                    {errors.lastname?.message}
                  </div>
                )}
              </div>
              <div className={cx("form-control")}>
                <label>Company Name</label>
                <input
                  type="text"
                  className={cx("form-input")}
                  placeholder=" Your Company name"
                  {...register("company")}
                />
               
              </div>
            </div>
            <div className={cx("form-group")}>
          
              <div className={cx("form-control")}>
                <label>Address</label>
                <input
                  type="text"
                  className={cx("form-input")}
                  placeholder=" Your Address"
                  {...register("Address", {
                    required: "Address is required",
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.Address && (
                  <div className={cx("error-message")} role="alert">
                    {errors.Address?.message}
                  </div>
                )}
              </div>
            </div>
            <div className={cx("form-group",["row-2"])}>
          
          <div className={cx("form-control")}>
            <label>Email</label>
            <input
              type="text"
              className={cx("form-input")}
              placeholder=" Your Email"
              {...register("Email", {
                required: "Email is required",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.Email && (
              <div className={cx("error-message")} role="alert">
                {errors.Email?.message}
              </div>
            )}
          </div>
          <div className={cx("form-control")}>
            <label>Phone number</label>
            <input
              type="text"
              className={cx("form-input")}
              placeholder=" Your phone"
              {...register("phone", {
                required: "phone is required",
              })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.phone && (
              <div className={cx("error-message")} role="alert">
                {errors.phone?.message}
              </div>
            )}
          </div>
        </div>
            <h3 className={cx("Additional")}>Additional Infor</h3>
            <div className={cx("order")}>
              <h3>Order Notes (Optional)</h3>
              <div className={cx("order-note")}>
                <textarea placeholder="Notes about your order, e.g. special notes for delivery"
      
                  {...register("note")}></textarea>
              </div>
            </div>
          </div>
          <div className={cx("order-prod")}>
            <h3 className={cx("order-title")}>Order Summery</h3>
            <div className={cx("order-list")}>
              {handleOrder()}
              <div className={cx("option")}>
                <span className={cx("option-title")}>subtotal:</span>
                <span className={cx("option-total")}>${total}</span>
              </div>
              <div className={cx("option")}>
                <span className={cx("option-title")}>Shipping:</span>
                <span className={cx("option-total")}>Free</span>
              </div>
              <div className={cx("total")}>
                <span className={cx("total-title")}>Total</span>
                <span className={cx("total-total")}>${total}</span>
              </div>
              <div className={cx("payment")}>
                <div>
                  <input type="radio" name="payment" />
                  <span>Cash on Delivery</span>
                  
                </div>
                <div>
                  <input type="radio" name="payment" />
                  <span>Paypal</span>
                </div>
                <div>
                  <input type="radio" name="payment" />
                  <span>Amazon Pay</span>
                </div>
              </div>
              <button className={cx("btn-payment")}>Place Order</button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
export default Checkout;
