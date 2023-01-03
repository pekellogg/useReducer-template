import React, { useImperativeHandle, useRef } from "react";
import classes from "./Input.module.css";

const Input = React.forwardRef((props, ref) => {

  const inputRef = useRef();
  const activate = () => {
    inputRef.current.focus();
  }
  useImperativeHandle(ref, () => {
    return {
      focus:activate,
    };
  });

  return (
    <div
        className={`${classes.control} ${
        props.isValid === false ? classes.invalid : ""
    }`}
    >
      <label htmlFor={props.id}>
          {props.label}
      </label>
      <input
          id={props.id}
          onChange={props.onChange}
          onBlur={props.onBlur}
          ref={inputRef}
          type={props.type || "text"}
          value={props.value}
      >
        {console.log(props.children)}
      </input>
    </div>
  );
  
});

export default Input;