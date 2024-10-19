import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <NavLink to='/products'>Products</NavLink>
      <NavLink to='/price-plans'>Price Plans</NavLink>
      <NavLink to='/pages'>Pages</NavLink>
    </div>
  );
}
