import styles from "./Login.module.scss";
import classNames from "classnames";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "./black 2.png";

const Login = () => {
  return (
    <div className={classNames(styles.login)}>
      <div className={classNames(styles.modal)}>
        <div className={classNames(styles.modal__logo)}>
          <img src={logo} alt="logo" />
        </div>
        <h3 className={classNames(styles.modal__title)}>Login form</h3>
        <p className={classNames(styles.modal__discr)}>
          Lorem Ipsum has been the industrys standard dummy text ever since.
        </p>
        <form>
          <Input
            type="login"
            margin="margin32"
            placeholder="Enter username"
            label="Username"
          />
          <Input
            type="password"
            margin="margin20"
            placeholder="Enter password"
            label="Password"
          />
          <p className={classNames(styles.modal__remaind)}>Forgot password?</p>
          <Button type="login" size="normal">
            Running order
          </Button>
        </form>

        <p className={classNames(styles.modal__footer)}>End user agreement</p>
      </div>
    </div>
  );
};

export default Login;
