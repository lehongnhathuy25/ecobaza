import className from "classnames/bind";
import style from "./detail.module.scss";
import getSession from "~/Session/getSession";
import ProDetail from "~/Layouts/Components/ProdDetail"
import SubmitCard from "~/Layouts/Components/submitCard"
import getUser from '~/components/getUser'
const cx = className.bind(style);
function Detail() {
  const Prod = JSON.parse(getSession("detail"));
  const user = getUser()
  console.log(user)
  return (
    <div className={cx("container")}>
    <div className={cx("detail")}>

        <ProDetail data={Prod}>
            <SubmitCard  data={Prod} user={user}/>
        </ProDetail>
    </div>
    </div>
  );
}

export default Detail;
