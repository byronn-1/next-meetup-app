import { Fragment } from "react/cjs/react.production.min";
import MeetupDetail from '../../../components/meetups/MeetupDetail'

function MeetupDetails() {
  return (
    <MeetupDetail 
    image="https://upload.wikimedia.org/wikipedia/commons/8/8a/Birmingham-Skyline-from-Edgbaston-crop.jpg"
     title="A first Meet!"
      address="16-40 Great Western Arcade, Birmingham B3 2QD"
    description="This is a meet up!"
    />
  );
}

export default MeetupDetails;
