import { Button, Form, InputGroup } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Accordion from "react-bootstrap/Accordion";

function App() {
  return (
    <Container className="my-3">
      <Row className="justify-content-md-center">
        <InputGroup className="mb-3">
          <Form.Control
            placeholder="Name your task"
            aria-label="Name your task"
          />

          <Form.Control
            placeholder="Describe your task"
            aria-label="Describe your task"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Add
          </Button>
        </InputGroup>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Task #1</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Task #2</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Task #3</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Row>
    </Container>
  );
}

export default App;
