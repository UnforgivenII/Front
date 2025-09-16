import { Grid, GridColumn, List } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ActivityList } from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
}

export default function ActivityDashboard(props: Props) {
  return (
    <Grid>
      <GridColumn width={10}>
        <List>
          <ActivityList
            activities={props.activities}
            selectActivity={props.selectActivity}
          />
        </List>
      </GridColumn>
      <GridColumn width="6">
        {props.selectedActivity && (
          <ActivityDetails
            activity={props.selectedActivity}
            cancelSelectActivity={props.cancelSelectActivity}
          />
        )}
        <ActivityForm />
      </GridColumn>
    </Grid>
  );
}
