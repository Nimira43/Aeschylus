import { useState } from 'react'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='col-md-6 offset-md-3'>
      <h2 className='text-prime logo'>Login</h2> 
      
    </div>
  )
}

export default Login