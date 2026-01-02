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
      description: 'Description.'
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