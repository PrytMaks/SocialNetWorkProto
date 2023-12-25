import s from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={s.header}>
      <img
        src="https://s3-alpha.figma.com/hub/file/1913095808/a7bdc469-cd70-4ea1-bb57-b59204ad8182-cover.png"
        alt="logo"
        className={s.logo}
      />
      <div className={s.loginBlock}>
        {props.isAuth ? 
        <div className="">{props.login} <button onClick={props.logout}>Logout</button></div> :  <NavLink to={"/login"}> Login </NavLink>}
       
      </div>
    </header>
  );
};

export default Header;
