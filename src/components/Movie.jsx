import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Movie = () => {
  const [movie, setMovie] = useState({}) 
  let { id } = useParams()

  useEffect(() => {

  }, [id])

  return (
    <div className='text-center'>
      <h2 className='text-prime logo'>Single Movie</h2> 
    </div>
  )
}

export default Movie