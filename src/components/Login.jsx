import { useState } from 'react'
import Input from './form/input'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
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