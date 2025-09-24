import { useState } from 'react'
import Input from './form/input'
import { useOutletContext } from 'react-router-dom'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { setJwtToken } = useOutletContext()
  const { setAlertClassName } = useOutletContext()
  const { setAlertMessage } = useOutletContext()

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log("Email / Password: ", email, password)

    if (email === 'admin@example.com') {
      setJwtToken('abc')
    }
  }

  return (
    <div className='col-md-6 offset-md-3'>
      <h2 className='uppercase'>Login</h2> 
      <form 
        onSubmit={handleSubmit}
      >
        <Input 
          title='Email Address'
          type='email'
          className='form-control mb-2'
          name='email'
          autoComplete='email-new'
          onChange={(event) => setEmail(event.target.value)}
        />
        <Input 
          title='Password'
          type='password'
          className='form-control mb-4'
          name='password'
          autoComplete='password-new'
          onChange={(event) => setPassword(event.target.value)}
        />
        <input 
          type='submit' 
          className=' bg-prime button text-light'
          value='Login'
        />
      </form>
    </div>
  )
}

export default Login