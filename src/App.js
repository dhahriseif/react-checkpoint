import "./App.css";
import React from "react";
import { Container, Nav, Navbar, Alert, Card, Button } from "react-bootstrap";

function App() {
  return (
    <React.Fragment>
      <div className="app">
        {/* this is navbar */}
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand href="#home">TUNIBEST</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* this is navbar */}
        {/* this is alert heading */}
        <Alert variant="secondary">
          <Alert.Heading>NEW THIS WEEK</Alert.Heading>
          <p>Welcome to my website</p>
          <hr />
          <p className="mb-0">FEEL FREE TO ENJOY THE RIDE</p>
        </Alert>
        {/* this is alert heading */}
        {/* this is cards bloc */}
        <div id="movies-container">
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/818hyvdVfvL._AC_UF894,1000_QL80_.jpg"
            />
            <Card.Body>
              <Card.Title>Batman Dark Knight</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Watch now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/71Euod3V4bL._AC_UF894,1000_QL80_.jpg"
            />
            <Card.Body>
              <Card.Title>Spider-Man</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Watch now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://m.media-amazon.com/images/I/51fWOBx3agL._AC_.jpg"
            />
            <Card.Body>
              <Card.Title>Breaking Bad</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Watch now</Button>
            </Card.Body>
          </Card>
        </div>
        {/* this is cards bloc */}
      </div>
    </React.Fragment>
  );
}

export default App;
