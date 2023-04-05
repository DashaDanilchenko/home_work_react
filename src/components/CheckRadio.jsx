const CheckRadio = ({setCheck, check}) => {

    function checkAllOrDone() {
        document.getElementById("all").checked = !check;
        document.getElementById("done").checked = check;
        setCheck(!check)
      }
    

  return (
    <div>
        <label htmlFor="all">
          <input className="radio" type="radio" id="all" name="all" checked={check}  onChange={() => checkAllOrDone()}/> All
        </label>

        <label htmlFor="done">
          <input className="radio" type="radio" id="done" name="done" onChange={() => checkAllOrDone()} /> Done
        </label>
    </div>
  )
}

export default CheckRadio