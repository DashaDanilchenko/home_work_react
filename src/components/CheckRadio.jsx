const CheckRadio = ({setCheck, check}) => {

    function checkAll() {
        document.getElementById("all").checked = true;
        document.getElementById("done").checked = false;
        setCheck(true)
      }
    
      function checkDone() {
        document.getElementById("all").checked = false;
        document.getElementById("done").checked = true;
        setCheck(false)
      }

  return (
    <div>
        <label htmlFor="all">
          <input className="radio" type="radio" id="all" name="all" checked={check}  onChange={() => checkAll()}/> All
        </label>

        <label htmlFor="done">
          <input className="radio" type="radio" id="done" name="done" onChange={() => checkDone()} /> Done
        </label>
    </div>
  )
}

export default CheckRadio