const Time = ({time}) => {
  return (
    <>
        <p className="red">Time now</p>
        <hr/>
        <p className="time">{time.hours} : {time.minutes} : {time.seconds}</p>
    </>
  )
}

export default Time