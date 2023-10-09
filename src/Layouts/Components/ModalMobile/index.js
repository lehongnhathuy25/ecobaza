import className from "classnames/bind";
import style from "./modalMobile.module.scss";

const cx = className.bind(style);
function ModalMobile({ children, showModal, removeModal }) {
  return (
    <div
      className={cx("modal")}
      style={
        showModal === true
          ? { transform: `translateX(0)` }
          : { transform: `translateX(-100%)` }
      }
    >
      <div className={cx("modal-overlay")} onClick={removeModal}></div>
      <div className={cx("modal-content")}>
        <span className={cx("re-modal")} onClick={removeModal}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 256 256"
            id="x"
          >
            <rect width="16" height="16" fill="none"></rect>
            <line
              x1="200"
              x2="56"
              y1="56"
              y2="200"
              fill="none"
              stroke="#00b207"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
            <line
              x1="200"
              x2="56"
              y1="200"
              y2="56"
              fill="none"
              stroke="#00b207"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="24"
            ></line>
          </svg>
        </span>
        {children}
      </div>
    </div>
  );
}

export default ModalMobile;
