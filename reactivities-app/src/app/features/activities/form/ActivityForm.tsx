import { Button, Form, FormInput, Segment } from "semantic-ui-react";

export default function ActivityForm() {
  return (
    <Segment>
      <Form>
        <Form.Input Placeholder="Title" />
        <Form.TextArea Placeholder="Description" />
        <Form.Input Placeholder="Category" />
        <Form.Input Placeholder="Date" />
        <Form.Input Placeholder="City" />
        <Form.Input Placeholder="Venue" />
        <Button floated="right" positive type="submit" content="Submit" />
        <Button floated="right" positive type="button" content="Cancel" />
      </Form>
    </Segment>
  );
}
