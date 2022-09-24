import { useEffect, useRef } from 'react'
import classes from './Input.module.css'

const Input = props =>{

  const inputRef = useRef();
  

  useEffect(()=>{
        inputRef.current.focus()
  },[]);

    return(
        <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ""
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type={props.type}
            id={props.id}
            ref = {inputRef}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
          />
        </div>
    )
}

export default Input