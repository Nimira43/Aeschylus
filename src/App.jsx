import { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Alert from './components/Alert'

function App() {
  const [jwtToken, setJwtToken] = useState('')
  const [alertMessage, setAlertMessage] = useState('')
  const [alertClassName, setAlertClassName ] = useState('d-none')

  return (
    <div className='container'>
      <div className='row'>
        <div className='col mt-4'>
          <h2 className='text-prime logo'>Aeschylus</h2>
        </div>
        <div className='col text-end mt-4'>
          {jwtToken === ''
            ? <Link 
                to='/login' 
                className='bg-prime text-light button'
              >
                Login
              </Link>
            : <a 
                href="#"
                className='bg-prime text-light button'
              >
                Logout
              </a>
          }
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
              {jwtToken !== '' &&
                <>
                  <Link 
                    href='/admin/movies/0'
                    className='list-group-item list-group-item-action'
                  >
                    Add Movie
                  </Link>
                  <Link 
                    to='/manage-movies'
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
                </>
              }
            </div>
          </nav>
        </div>
        <div className='col-md-10 mt-4'>
          <Alert 
            message={alertMessage}
            className={alertClassName}
          />
          <Outlet context={{
            jwtToken, setJwtToken
          }}/>
        </div>
      </div>
    </div>
  )
}

export default App
