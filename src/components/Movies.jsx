import { useState } from 'react'

const Movies = () => {
  const [movies, setMovies] = useState([]) 

  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Movies</h2> 
    </div>
  )
}

export default Movies