import { Button, Form, FormInput, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { ChangeEvent, useState } from "react";

interface Props {
  selectedActivity: Activity | undefined;
  closeForm: () => void;
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
    console.log(activity);
  }


function handelInputChange(event:ChangeEvent<HTMLInputElement|HTMLTextAreaElement>){

  const {name ,value}=event.target;
  setActivity({.../activity,[name]:value});

}


  return (
    <Segment>
      <Form onSubmit={handelFormSubmit} autoComplete="off">
        <Form.Input Placeholder="Title" name='title' value={activity.title} />
        <Form.TextArea Placeholder="Description" name='Description' value={activity.description}/>
        <Form.Input Placeholder="Category" name='Category' value={activity.category} />
        <Form.Input Placeholder="Date" name='Date' value={activity.date} />
        <Form.Input Placeholder="City" name='City' value={activity.city} />
        <Form.Input Placeholder="Venue" name='Venue' value={activity.venue} />
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
