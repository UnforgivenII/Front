import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
  selectedActivity: Activity | undefined;
  closeForm: () => void;
  CreateOrEditActivity: (activity: Activity) => void;
}

export default function ActivityForm(props: Props) {
  const initialState = props.selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    description: "",
    date: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handelFormSubmit() {
    props.CreateOrEditActivity(activity);
  }

  function handelInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment>
      <Form onSubmit={handelFormSubmit} autoComplete="off">
        <Form.Input
          Placeholder="Title"
          name="title"
          value={activity.title}
          onChange={handelInputChange}
        />
        <Form.TextArea
          Placeholder="Description"
          name="description"
          value={activity.description}
          onChange={handelInputChange}
        />
        <Form.Input
          Placeholder="Category"
          name="category"
          value={activity.category}
          onChange={handelInputChange}
        />
        <Form.Input
          type="date"
          Placeholder="Date"
          name="date"
          value={activity.date}
          onChange={handelInputChange}
        />
        <Form.Input
          Placeholder="City"
          name="city"
          value={activity.city}
          onChange={handelInputChange}
        />
        <Form.Input
          Placeholder="Venue"
          name="venue"
          value={activity.venue}
          onChange={handelInputChange}
        />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button
          onClick={props.closeForm}
          floated="right"
          positive
          type="button"
          content="Cancel"
        />
      </Form>
    </Segment>
  );
}
