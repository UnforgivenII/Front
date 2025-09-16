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
  const [editMode, setEditMode] = useState(false);
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

  function handelFormOpen(id?: string) {
    id ? handelSelectedActivity(id) : handelCancelSelectedActivity();
    setEditMode(true);
  }

  function handelFormClose() {
    setEditMode(false);
  }

  return (
    <div>
      <Navbar openForm={handelFormOpen} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handelSelectedActivity}
          cancelSelectActivity={handelCancelSelectedActivity}
          editMode={editMode}
          openForm={handelFormOpen}
          closeForm={handelFormClose}
        />
      </Container>
    </div>
  );
}

export default App;
