import {useState} from "react";
import { Route, Routes,Link } from "react-router-dom";
import GetData from "./userdata/getData";
import StoreData from "./userdata/storeData";
import {Navbar,Container,Nav} from 'react-bootstrap'

function App() {
  return (
    <>
      <h1>This is main page</h1>

        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="www.tnplab.com">tnplab.com</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link><Link to="/">Display</Link></Nav.Link> 
              <Nav.Link><Link to="/register">Register</Link></Nav.Link>
                           
            </Nav>
          </Container>
        </Navbar>

      <Routes>
        <Route path="/" element={<GetData />} />
        <Route path="/register" element={<StoreData />} />
      </Routes>
      {/* <GetData/> */}
      {/* <StoreData /> */}
    </>
  );
}

export default App;
