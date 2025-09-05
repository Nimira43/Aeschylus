import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ErrorPage from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'
import Movies from './components/Movies.jsx'
import Movie from './components/Movie.jsx'
import Genres from './components/Genres.jsx'
import EditMovie from './components/EditMovie.jsx'
import ManageMovies from './components/ManageMovies.jsx'
import GraphQL from './components/GraphQL.jsx'
import Login from './components/Login.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, 
        element: <Home />
      },
      {
        path: '/movies', 
        element: <Movies />
      },
      {
        path: '/movies/:id', 
        element: <Movie />
      },
      {
        path: '/genres', 
        element: <Genres />
      },
      {
        path: '/admin/movie/0', 
        element: <EditMovie />
      },
      {
        path: '/manage-movies', 
        element: <ManageMovies />
      },
      {
        path: '/graphql', 
        element: <GraphQL />
      },
      {
        path: '/login', 
        element: <Login />
      },
    ] 
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
