import { useEffect, useState } from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([]) 

  useEffect(() => {
    let moviesList = [
      {}
    ]
  })

  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Movies</h2> 
    </div>
  )
}

export default Movies