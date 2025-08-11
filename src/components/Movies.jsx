import Hero from '../images/hero.png'

const Home = () => {
  return (
    <>
      <div className='text-center'>
        <h2 className='text-prime logo'>Movie Search</h2>
        <img src={Hero} alt='Hero image' />
      </div>
    </>
  )
}

export default Home