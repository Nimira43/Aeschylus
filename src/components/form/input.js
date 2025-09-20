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
      <input 
        type={props.type}
        className={props.className}
        id={props.name}
        ref={ref}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.onChange}
        autoComplete={props.autoComplete}
        value={props.value}
      />
    </div>
  )
})