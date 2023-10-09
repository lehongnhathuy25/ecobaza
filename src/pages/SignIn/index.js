import className from "classnames/bind";
import style from "./signIn.module.scss";
import config from "~/config";
import { useState } from "react";
import UserAPI from "~/Api/UserAPI";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import setLocalStorage from '~/LocalStorage/setLocalStorage'
import setSesstion from '~/Session/setSession'
const cx = className.bind(style);
function SignIn() {
  const [checkAccout,setCheckAccount] = useState(true)
  const [rememberMe,setRememberMe] = useState(false)
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const userList = UserAPI()

  const onSubmit = (data) => {
   const findUser = userList.find((user,index)=>{
          if(user.username === data.username && user.password === data.password){
            return user
          }
    })
      if(findUser){
        const formData= {
          id:findUser.id,
          username:findUser.username,
          card:findUser.card
        }
        if(rememberMe === true){
          setLocalStorage('user',JSON.stringify(formData))
        }
        else{
          setSesstion('user',JSON.stringify(formData))
        }
        setLocalStorage('card',JSON.stringify(formData.card))
        setCheckAccount(true)
        setInterval(() => {
          navigate('/')
          window.location.reload()
         
        }, 200);
     
      }
      else{
        setCheckAccount(false)
      }
  };
  const handleRemember =() =>{
    if(rememberMe === false){
      setRememberMe(true)
    }
    else{
      setRememberMe(false)
    }
  }
  
  return (
    <div className={cx("authen")}>
      <div className={cx("content")}>
        <div className={cx("title")}>
          <h3>Sign In</h3>
        </div>
        <form
          className={cx("form")}
          autoComplete="off"
          onSubmit={handleSubmit(onSubmit)}
        >
        <div className={cx("form-control")}>

          <div className={cx("form-group")}>
            <input type="text" placeholder="userName" autoComplete="off"
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
              autoComplete="new-password"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
              })}
            />
          </div>
          {errors.password && (
              <p className={cx("error-message")} role="alert">
                {errors.password?.message}
              </p>
            )}
        </div>
          <div className={cx("remember")}>
            <input type="checkbox" onClick={handleRemember} />
            <span> remember me</span>
          </div>
          <button className={cx("btn-signIn")}>SIGN IN</button>
          <div className={cx("create-acount")}>
            <p> Don't have an account ?</p>
            <a className={cx("comeback")} href={config.router.signUp}>
              {" "}
              SIGN UP NOW
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
          {!checkAccout ? (   <p className='text-center' style={{color:'red'}}>username or password is incorrect</p>): ("")}
       
        </form>
      </div>
    </div>
  );
}

export default SignIn;
