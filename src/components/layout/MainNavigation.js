import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";

export const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}> React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to={"/"}> All Meetups</Link>
          </li>
          <li>
            <Link to={"/new-meetup"}> Add new meetup</Link>
          </li>
          <li>
            <Link to={"/favorites"}> My favorites</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
