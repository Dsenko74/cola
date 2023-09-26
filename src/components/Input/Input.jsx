import styles from "./Input.module.scss";
import classNames from "classnames";
// в цьому компоненті input огорнутий в div, тому що input немає можливості створювати псевдоелементи after before. Сама реалізація в інпуті кружечков мені не дуже
// подобається, в кнопці воно якось було красивше
// інпут має 4 state default  active  filled  disable

const Input = ({
  label,
  margin,
  type = "primary",
  state = "default",
  //customClassName,
  htmlType,
  ...htmlProps
}) => {
  return (
    <div className={classNames(styles[margin])}>
      {label && (
        <label htmlFor="inputField" className={classNames(styles.label)}>
          {label}
        </label>
      )}
      <div className={classNames(styles.wrapper, styles[type])}>
        <input
          id="inputField"
          {...htmlProps}
          type={htmlType}
          className={classNames(styles.input, styles[type], styles[state])}
        ></input>
      </div>
    </div>
  );
};

export default Input;
