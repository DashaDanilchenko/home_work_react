const MePet = ({mePet}) => {
  return (
    <>
      <p className="red">My pet</p>
        <hr/>
        <h2>{mePet.pet}</h2>
        <p>{mePet.name}</p>
        <p>{mePet.year} year old</p>
        <img src={mePet.photo} alt="PetPhoto" className="photo"></img>
    </>
  )
}

export default MePet