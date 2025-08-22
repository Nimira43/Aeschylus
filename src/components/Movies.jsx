import { useEffect, useState } from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([]) 

  useEffect(() => {
    let moviesList = [
      {
         id: 1,
         title: 'Star Wars',
         releaseDate: '1977-05-25',
         runtime: 121,
         mpaa_rating: 'PG',
         description: 'The Rebel Alliance aims to destroy the tyrannical Empire\'s ultimate weapon, the Death Star. When the rebel leader Princess Leia is captured by the Empire, Luke Skywalker acquires stolen architectural plans for the Death Star and sets out to rescue her while learning the ways of the Force from the Jedi Master Obi-Wan Kenobi.'
      },
    ]
  })

  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Movies</h2> 
    </div>
  )
}

export default Movies