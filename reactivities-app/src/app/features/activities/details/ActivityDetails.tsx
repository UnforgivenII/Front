import {
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardMeta,
  Image,
} from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
  openForm: (id?: string) => void;
}

export default function ActivityDetails(props: Props) {
  return (
    <Card>
      <Image src={"/assets/categoryImages/${prrops.activity.category}.jpg"} />
      <CardContent>
        <Card.Header>{props.activity.title}</Card.Header>
        <CardMeta>
          <span>{props.activity.date}</span>
        </CardMeta>
        <CardDescription>{props.activity.description}</CardDescription>
      </CardContent>
      <CardContent extra>
        <ButtonGroup widths="2">
          <Button
            onClick={() => {
              props.openForm(props.activity.id);
            }}
            basic
            color="blue"
            content="edit"
          />
          <Button
            onClick={props.cancelSelectActivity}
            basic
            color="grey"
            content="cancel"
          />
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}
