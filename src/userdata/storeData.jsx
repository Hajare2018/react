import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";

function StoreData() {
  // alert ("You clicked")
  let [fname, setFname] = useState("");
  let [lname, setLname] = useState("");
  let [email, setEmail] = useState("");
  let [mobile, setMobile] = useState("");
  let [password, setPassword] = useState("");
  let [address, setAddress] = useState("");

  function submitData() {
    let userData = {
      firstName: fname,
      lastName: lname,
      email: email,
      mobile_no: mobile,
      password: password,
      address: address,
    };
    let reqData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };

    fetch("http://3.111.186.195:3000/register", reqData)
    .then((response) =>
      console.log(`Data Submitted ${response.status}`)
    )
  }

  return (
    <>
      <Container
        fluid="md"
        style={{ backgroundColour: "black", colour: "magenta" }}
      >
        <h1>Register New User</h1>
        <Row>
          <Col>
            <label>First Name</label>
            <input
              className="form-control"
              placeholder="eg. Sachin"
              type="text"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            <label>Last Name</label>
            <input
              className="form-control"
              placeholder="eg. Tendulkar"
              type="text"
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            <label>Email</label>
            <input
              className="form-control"
              placeholder="sachin@gmail.com"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Mobile</label>
            <input
              className="form-control"
              placeholder="9876543210"
              type="text"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <label>Password</label>
            <input
              className="form-control"
              placeholder="*****"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Address</label>
            <input
              className="form-control"
              placeholder="INDIA"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <button onClick={submitData} className="btn btn-primary"> Save</button>
          </Col>
          <Col>
            <button className="btn btn-warning">Cancel</button>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StoreData;
