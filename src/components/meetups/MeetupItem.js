import classes from "./MeetupItem.module.css";
import { Card } from "../ui/Card";

export const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt="Meetup place"></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button> To Favorites</button>
        </div>
      </Card>
    </li>
  );
};
