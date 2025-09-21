import { Link } from 'react-router-dom'
import Hero from '../images/hero.png'

const Home = () => {
  return (
    <>
      <div className='text-center'>
        <h2 className='uppercase'>Movie Search</h2>
        <Link
          to='/movies'
        >
          <img src={Hero} alt='Hero image' />
        </Link>
      </div>
    </>
  )
}

export default Home