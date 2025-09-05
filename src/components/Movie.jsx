import { useState } from 'react'

const Movie = () => {
  const [movie, setMovie] = useState({})  
  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Single Movie</h2> 
    </div>
  )
}

export default Movie