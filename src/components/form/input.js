import { forwardRef } from 'react'

const Input = forwardRef((props, ref) => {
  return (
    <div claddName='mb-3'>
      <label 
        htmFor={props.name}
        className='form-label'
      >
        {props.title}
      </label>
    </div>
  )
})