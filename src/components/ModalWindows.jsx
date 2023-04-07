import { useContext } from "react";
import Context from "../Context";

const ModalWindows = () => {

  const {modal, setModal, data} = useContext(Context)

  return (
    <div className={ modal ? `window` : `none` }>
        <button onClick={() => setModal (false)}><i className="fa-solid fa-xmark"></i></button>
        <div>{data}</div>
    </div>
  )
}

export default ModalWindows