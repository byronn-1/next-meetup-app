import { Fragment } from "react/cjs/react.production.min";
import classes from './MeetupDetail.module.css'


function MeetupDetail() {
    <secction className={classes.detail}>
        <img
            onScroll={props.image}
            alt={props.title}
        />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
    </secction>
}

export default MeetupDetail