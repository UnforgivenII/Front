import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./Styles.css";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./NavBar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  useEffect(() => {
    axios.get("https://localhost:7142/api/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);
  function handelSelectedActivity(id: string) {
    setSelectedActivity(activities.find((x) => x.id === id));
  }

  function handelCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  return (
    <div>
      <Navbar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard 
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handelCancelSelectedActivity}
        cancelSelectActivity={handelCancelSelectedActivity}
        />
      </Container>
    </div>
  );
}

export default App;
