import React from 'react'
//import styles from "./Button.module.scss";
import "./Button.module.scss";
//import classNames from "classnames"

const Button = ({ children, htmlType, ...htmlProps }) => {
  return (
      <button 
      {...htmlProps}
      type={htmlType}
      className='button'
      // className={styles.button}
      >{children}</button>
  )
}

export default Button;

//type = 'primary', size = 'normal', className,