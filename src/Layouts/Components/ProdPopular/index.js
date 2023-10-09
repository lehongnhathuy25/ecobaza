import className from "classnames/bind";
import style from "./prodPopular.module.scss";
import Product from "~/Api/Product";
import ProdPopularItem from "./ProdPopularItem";
import { useState} from "react";
import Modal from "../Modal";

import getUser from '~/components/getUser'
import { useNavigate } from "react-router-dom";
import Config from '~/config'
import setSession  from '~/Session/setSession'
import  SubmitCard from '../submitCard'
const cx = className.bind(style);

function ProdPopular() {
  const [modal, setModal] = useState(false);
  const [cardModal, setCardModal] = useState({});

  const proList = Product();

  const navigate = useNavigate();
  const user = getUser()
  const handleShoppingCard = (data) =>{
    if(user){
      setModal(true)
      setCardModal(data)
    }
    else{
      navigate(Config.router.signIn)
    }
  }
  const showDetail = (data) =>{
    setSession("detail",JSON.stringify(data))
  }
  const getList = () => {
    const prodActive = proList.filter((prod, index) => {
      return prod.status === true;
    });

    return prodActive.map((prod, index) => (
      <ProdPopularItem data={prod}  onclick={handleShoppingCard} detail={showDetail}  key={index} />
    ));
  };
  return (
    <div className={cx("prod-list", ["mt-32"])} >
      {getList()}
      {modal ? (
        <Modal data={cardModal} onclick={()=>{setModal(false)}} >
          <SubmitCard data={cardModal} user={user} onclick={()=>{setModal(false)}} />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default ProdPopular;
