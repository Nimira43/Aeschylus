import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
 
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 text-center'>
          <h1 className='mt-3 logo text-prime'>Page Not Found</h1>
          <p>We cannot find the page you are looking for.</p>
          <p>
            <em>{error.statusText || error.message}</em>
          </p>
        </div>
      </div>
    </div>
  )
}