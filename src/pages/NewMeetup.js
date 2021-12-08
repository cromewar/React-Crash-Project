import { NewMeetupForm } from "../components/meetups/NewMeetupForm";
import { useNavigate } from "react-router";

export const NewMeetupPage = () => {
  const navigate = useNavigate();
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
    ).then(() => {
      navigate("/");
    });
  };

  return (
    <section>
      <h1>Add new Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetUpHandler} />
    </section>
  );
};
