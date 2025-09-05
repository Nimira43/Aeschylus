import { useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState({}) 
  let { id } = useParams()

  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Single Movie</h2> 
    </div>
  )
}

export default Movie