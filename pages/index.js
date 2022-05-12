import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/8/8a/Birmingham-Skyline-from-Edgbaston-crop.jpg",
    address: "16-40 Great Western Arcade, Birmingham B3 2QD",
    description: "This is a first meet up",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f6/Saffron_Walden_market_square.jpg ",
    address: "Some address",
    description: "This is a second meet up",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/58/Leeds_CBD_at_night.jpg",
    address: "Some address",
    description: "This is a third meet up",
  },
  {
    id: "m4",
    title: "A Fourth Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b1/StonyStratford_HighStreet01.jpg",
    address: "Some address",
    description: "This is a fourth meet up",
  },
];


function HomePage() {
  return (

      <MeetupList meetups={DUMMY_MEETUPS} />

  );
}

export default HomePage;
