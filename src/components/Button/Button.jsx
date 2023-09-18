//import React from 'react'
import styles from "./Button.module.scss";
//import "./Button.module.scss";
import classNames from "classnames"

const Button = ({children, type='primary', size='normal', className, htmlType, ...htmlProps}) => {
  return (
      <button 
      {...htmlProps}
      type={htmlType}
      className={classNames(
        styles.button,
        styles[type],
        styles[size],
      )}
      >{children}</button>
  )
}

export default Button;
