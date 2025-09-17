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
  editMode: boolean;
  openForm: (id?: string) => void;
  closeForm: () => void;
  CreateOrEditActivity: (activity: Activity) => void;
  deleteActivity: (id: string) => void;
  submitting: boolean;
}

export default function ActivityDashboard(props: Props) {
  return (
    <Grid>
      <GridColumn width={10}>
        <List>
          <ActivityList
            activities={props.activities}
            selectActivity={props.selectActivity}
            deleteActivity={props.deleteActivity}
            submitting={props.submitting}
          />
        </List>
      </GridColumn>
      <GridColumn width="6">
        {props.selectedActivity && !props.editMode && (
          <ActivityDetails
            activity={props.selectedActivity}
            cancelSelectActivity={props.cancelSelectActivity}
            openForm={props.openForm}
          />
        )}
        {props.editMode && (
          <ActivityForm
            closeForm={props.closeForm}
            selectedActivity={props.selectedActivity}
            CreateOrEditActivity={props.CreateOrEditActivity}
            submitting={props.submitting}
          />
        )}
      </GridColumn>
    </Grid>
  );
}
