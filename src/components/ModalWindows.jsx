import { useContext } from "react";
import Context from "../Context";

const ModalWindows = () => {

  const {modal, setModal, data, didBuy} = useContext(Context)

  console.log(data)

  return (
    <div className={ modal ? `window` : `none` }>
        <button className="close cursor" onClick={() => setModal (false)}><i className="fa-solid fa-xmark"></i></button>
        <div>
          <h2>{data.title}</h2>
          <p>{data.price}</p>
          <img src={data.img} alt={data.img} />
          <p>{data.description}</p>
          <button className={data.buy ? "button-buy disabled" : "button-buy"} onClick={() => didBuy( data )} disabled={data.buy}>Buy</button>
        </div>
    </div>
  )
}

export default ModalWindows