import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./Styles.css";
import axios from "axios";
import { Container, Header } from "semantic-ui-react";
import { Activity } from "../models/activity";
import Navbar from "./NavBar";
import ActivityDashboard from "../features/activities/dashboard/ActivityDashboard";
import { v4 as uuid } from "uuid";
import agent from "../api/agent";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  useEffect(() => {
    // axios.get("").then((response) => {
    //   console.log(response);
    //   setActivities(response.data);
    // });
    agent.Activities.List().then((response) => {
      let activities: Activity[] = [];
      response.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        activities.push(activity);
      });

      setActivities(response);
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

  function handelCreateOrEditActivity(activity: Activity) {
    activity.id
      ? setActivities([
          ...activities.filter((a) => a.id !== activity.id),
          activity,
        ])
      : setActivities([...activities, { ...activity, id: uuid() }]);

    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handelDeleteActivity(id: string) {
    setActivities([...activities.filter((a) => a.id !== id)]);
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
          CreateOrEditActivity={handelCreateOrEditActivity}
          deleteActivity={handelDeleteActivity}
        />
      </Container>
    </div>
  );
}

export default App;
