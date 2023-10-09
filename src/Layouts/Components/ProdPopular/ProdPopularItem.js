import className from "classnames/bind";
import style from "./prodPopular.module.scss";

import {memo} from 'react'
import setSession from '~/Session/setSession'
import Config from '~/config'
const cx = className.bind(style);
function ProPopularItem({ data = {},onclick, showModal,detail}) {
  return (
    <>
      <div className={cx("prod-item")} >
        <a href={Config.router.detail}  className={cx("prod-image")} onClick={()=>{detail(data)}}>
          <img src={data.thumbnail} />
        </a>
        <div className={cx("prod-infor")}>
          <div>
            <p className={cx("prod-name")}>{data.name}</p>
            <div className={cx("prod-price")}>
              <span className={cx("prod-new-price")}>${data.newPrice}</span>
              {data.oldPrice > 0 ? (
                <span className={cx("prod-old-price")}>${data.oldPrice}</span>
              ) : (
                ""
              )}
            </div>
            <div className={cx("prod-rating")}>
              <span className={cx("rating-icon")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  ></path>
                </svg>
              </span>
              <span className={cx("rating-icon")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  ></path>
                </svg>
              </span>
              <span className={cx("rating-icon")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  ></path>
                </svg>
              </span>
              <span className={cx("rating-icon")}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  id="star"
                >
                  <path
                    style={{ marker: "none" }}
                    fill="#f8b84e"
                    d="M-1220 1212.362c-11.656 8.326-86.446-44.452-100.77-44.568-14.324-.115-89.956 51.449-101.476 42.936-11.52-8.513 15.563-95.952 11.247-109.61-4.316-13.658-76.729-69.655-72.193-83.242 4.537-13.587 96.065-14.849 107.721-23.175 11.656-8.325 42.535-94.497 56.86-94.382 14.323.116 43.807 86.775 55.327 95.288 11.52 8.512 103.017 11.252 107.334 24.91 4.316 13.658-68.99 68.479-73.527 82.066-4.536 13.587 21.133 101.451 9.477 109.777z"
                    color="#000"
                    overflow="visible"
                    transform="matrix(.04574 0 0 .04561 68.85 -40.34)"
                  ></path>
                </svg>
              </span>
            </div>
          </div>
          <div className={cx("prod-cart")} onClick={()=>{onclick(data)}}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
            >
              <path
                d="M6.66667 8.33333H4.16667L2.5 17.5H17.5L15.8333 8.33333H13.3333M6.66667 8.33333V5.83334C6.66667 3.99239 8.15905 2.5 10 2.5V2.5C11.8409 2.5 13.3333 3.99238 13.3333 5.83333V8.33333M6.66667 8.33333H13.3333M6.66667 8.33333V10.8333M13.3333 8.33333V10.8333"
                stroke="#1A1A1A"
                strokeWidth="1.3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
   
    </>
  );
}

export default ProPopularItem;
