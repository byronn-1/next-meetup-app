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

  //you would never hard code this paths array, and fetch this and creat it dynamically
  //need to add a fallback key- tells next js if your paths contains all supported parameter values or just some of them
export async function getStaticPaths() {

  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        }
      }
    ]
  }
}

  //fetch data for single meetup
export async function getStaticProps(context) {


  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props:{
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Birmingham-Skyline-from-Edgbaston-crop.jpg',
        id: meetupId,
        title: 'First Meet',
        address: '16-40 Great Western Arcade, Birmingham B3 2QD',

      }
    }
  }
}

export default MeetupDetails;
