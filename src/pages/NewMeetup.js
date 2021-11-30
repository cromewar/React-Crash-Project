import { NewMeetupForm } from "../components/meetups/NewMeetupForm";

export const NewMeetupPage = () => {
  const addMeetUpHandler = (meeetupData) => {
    fetch(
      "https://react-crash-course-635cb-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(meeetupData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onaddMeetup={addMeetUpHandler} />
    </section>
  );
};
