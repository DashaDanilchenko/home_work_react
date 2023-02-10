const Movie = ({movie}) => {
  return (
    <>
        <p className="red">Favorite movie</p>
        <hr/>
        <h2>{movie.name}</h2>
        <p>{movie.nameAuthor}</p>
        <p>{movie.year} year production</p>
        <p>{movie.productionCompanies}</p>
        <img src={movie.photo} alt="Avatar"></img>
    </>
  )
}

export default Movie