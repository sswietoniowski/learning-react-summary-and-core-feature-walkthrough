import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetupPage() {
  function addMeetupHandler(meetupData) {
    const apiUrl =
      "https://react-getting-started-1c270-default-rtdb.europe-west1.firebasedatabase.app/"; //process.env.REACT_APP_FIREBASE_DATABASE_URL;
    fetch(`${apiUrl}meetups.json`, {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });
  }

  return (
    <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default NewMeetupPage;
