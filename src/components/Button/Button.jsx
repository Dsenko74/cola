import styles from "./Button.module.scss";
import classNames from "classnames";

const Button = ({
  children,
  type = "primary",
  size = "normal",
  customClassName,
  htmlType,
  ...htmlProps
}) => {
  return (
    <button
      {...htmlProps}
      type={htmlType}
      className={classNames(
        styles.button,
        styles[type],
        styles[size],
        customClassName,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
