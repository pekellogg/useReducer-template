import classes from "./Button.module.css";

const Button = (props) => {

  return (
    <button
      className={`${classes.button} ${props.className}`}
      disabled={props.disabled}
      onClick={props.onClick}
      type={props.type || "button"}
    >
      {props.children}
    </button>
  );
  
};

export default Button;