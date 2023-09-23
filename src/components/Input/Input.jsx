import styles from "./Input.module.scss";
import classNames from "classnames";
// в цьому компоненті input огорнутий в div, тому що input немає можливості створювати псевдоелементи after before. Сама реалізація в інпуті кружечков мені не дуже
// подобається, в кнопці воно якось було красивше
// інпут має 4 state default  active  filled  disable

const Input = ({
  children,
  type = "primary",
  state = "default",
  //customClassName,
  htmlType,
  ...htmlProps
}) => {
  return (
    <div className={classNames(styles.wrapper, styles[type])}>
      <label htmlFor="inputField" className={classNames(styles.label)}>
        {children}
      </label>
      <input
        id="inputField"
        {...htmlProps}
        type={htmlType}
        className={classNames(styles.input, styles[type], styles[state])}
      ></input>
    </div>
  );
};

export default Input;
