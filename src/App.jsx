import { Outlet } from 'react-router-dom'

function App() {
  return (
    <div className='container'>
      <div className='row'>
        <div className='col mt-4'>
          <h2 className='text-prime logo'>Aeschylus</h2>
        </div>
        <div className='col text-end mt-4'>
          <a 
            href='#' 
            className='bg-prime text-light button'
          >
            Login
          </a>
        </div>
        <hr className='mb-3'></hr>
      </div>
      <div className='row'>
        <div className='col-md-2'>
          <nav>
            <div className='list-group'>
              <a 
                href='#'
                className='list-group-item list-group-item-action'
              >
                Home
              </a>
              <a 
                href='#'
                className='list-group-item list-group-item-action'
              >
                Movies
              </a>
              <a 
                href='#'
                className='list-group-item list-group-item-action'
              >
                Genres
              </a>
              <a 
                href='#'
                className='list-group-item list-group-item-action'
              >
                Add Movie
              </a>
              <a 
                href='#'
                className='list-group-item list-group-item-action'
              >
                Manage
              </a>
              <a 
                href='#'
                className='list-group-item list-group-item-action'
              >
                Graph QL
              </a>
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
