import className from "classnames/bind";
import { useState } from "react";
import style from "./signUp.module.scss";
import config from "~/config";
import Images from "~/assets/images";

import { useForm } from "react-hook-form";
import AddUserAPI from '~/Api/AddUserAPI'
import {useNavigate} from "react-router-dom"
const cx = className.bind(style);
function SignUp() {
  const {register,formState: { errors },handleSubmit} = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) =>  {
    const url="user"
    AddUserAPI(data,url)
    setInterval(() => {
      navigate(config.router.signIn);
      window.location.reload()
    },500);
  }
  return (
    <div className={cx("authen")}>
      <div className={cx("content")}>
        <div className={cx("title")}>
          <h3>Sign up</h3>
        </div>
        <form className={cx("form")} onSubmit={handleSubmit(onSubmit)}>
          <div className={cx("form-control")}>
            <div className={cx("form-group")}>
              <input
                autoComplete="username"
                type="text"
                placeholder="username"
                {...register("username", {
                  required: "Email Address is required",
                })}
                aria-invalid={errors.mail ? "true" : "false"}
              />
            </div>
            {errors.username && <div className={cx("error-message")} role="alert">{errors.username?.message}</div>}
          </div>
          <div className={cx("form-control")}>
            
          <div className={cx("form-group")}>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
              autoComplete="current-password"
              placeholder="Password"
            />
            
          </div>
          {errors.password && (
              <p className={cx("error-message")} role="alert">
                {errors.password?.message}
              </p>
            )}
          </div>
          <button className={cx("btn-signIn")}>SIGN UP</button>
          <div className={cx("create-acount")}>
            <p> Create an Account with!</p>
            <a href={config.routeUp}>
              <img src={Images.Google_icon} />
            </a>
            <a href={config.routeUp}>
              <img src={Images.Facebook_icon} />
            </a>
            <a href={config.router.signIn} className={cx("comeback")}>
              SIGN IN NOW
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  with="18"
                  height="18"
                  id="right-arrow"
                >
                  <path
                    with="24"
                    height="24"
                    d="M22.707,12.707a1,1,0,0,0,0-1.414l-6-6a1,1,0,0,0-1.414,1.414L19.586,11H2a1,1,0,0,0,0,2H19.586l-4.293,4.293a1,1,0,0,0,1.414,1.414Z"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
