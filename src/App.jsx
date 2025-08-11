import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col mt-4'>
          <h2 className='text-prime logo'>Aeschylus</h2>
        </div>
        <div className='col text-end mt-4'>
          <Link 
            to='/login' 
            className='bg-prime text-light button'
          >
            Login
          </Link>
        </div>
        <hr className='mb-3'></hr>
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <Link 
                to='/'
                className='list-group-item list-group-item-action'
              >
                Home
              </Link>
              <Link 
                to='/movies'
                className='list-group-item list-group-item-action'
              >
                Movies
              </Link>
              <Link 
                to='/genres'
                className='list-group-item list-group-item-action'
              >
                Genres
              </Link>
              <Link 
                href='/admin/movie/0'
                className='list-group-item list-group-item-action'
              >
                Add Movie
              </Link>
              <Link 
                to='/admin'
                className='list-group-item list-group-item-action'
              >
                Manage Movies
              </Link>
              <Link 
                to='/graphql'
                className='list-group-item list-group-item-action'
              >
                Graph QL
              </Link>
            </div>
          </nav>
        </div>
        <div className='col-md-10'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default App
