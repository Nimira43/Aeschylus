import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState({}) 
  let { id } = useParams()

  useEffect(() => {
    let myMovie = {
      id: 1,
      title: 'Star Wars',
      releaseDate: '1977-05-25',
      runtime: 121,
      mpaa_rating: 'PG',
      description: 'The Rebel Alliance aims to destroy the tyrannical Empire\'s ultimate weapon, the Death Star. When the rebel leader Princess Leia is captured by the Empire, Luke Skywalker acquires stolen architectural plans for the Death Star and sets out to rescue her while learning the ways of the Force from the Jedi Master Obi-Wan Kenobi.'
    }
    setMovie(myMovie)
  }, [id])

  return (
    <div className='text-center'>
      <h2>{movie.title}</h2>
      <small><em>{movie.releaseDate}, {movie.runtime} mins, {movie.mpaa_rating}</em></small>
      <hr />
      <p>{movie.description}</p> 
    </div>
  )
}

export default Movie