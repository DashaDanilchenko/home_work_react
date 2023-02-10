const AboutMe = ({aboutMe, photo}) => {
  return (
    <>
        <p className="red">About me</p>
        <hr/>
        <h2>{aboutMe.name}</h2>
        <p>{aboutMe.phone}</p>
        <p>{aboutMe.email}</p>
        <p>{aboutMe.year} year old</p>
        <p>{aboutMe.city}</p>
        <img src={photo} alt="MePhoto" className="photo"></img>
    </>
  )
}

export default AboutMe