import React, { useState } from 'react';
import { Container, Row, Col, Button, Form, FormGroup, Label, Input, CardImg } from 'reactstrap';

export default function User() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleReservationSubmit = (e) => {
    e.preventDefault();
    // Perform reservation submission logic here
    console.log('Reservation submitted!');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Password:', password);
  };

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Container className="d-flex align-items-center justify-content-center">
          <div style={{ position: 'relative' }}>
            <img
              src="https://hotelxtoronto.com/_novaimg/4319882-1346087_0_294_4800_1963_2200_900.rc.jpg"
              alt="Room"
              style={{ maxWidth: '1440px', maxHeight: '300px', margin: '0 auto' }}
            />
            <img
              src="https://img.uxwing.com/wp-content/themes/uxwing/download/peoples-avatars-thoughts/user-profile-icon.svg"
              alt="Profile"
              style={{
                maxWidth: '150px',
                maxHeight: '180px',
                marginTop: '-70px',
                marginLeft: '30px',
                marginBottom: '100px',
                display: 'block',
                position: 'absolute',
                zIndex: 5,
              }}
            />
            <div style={{ textAlign: 'center' }}>
              <h1 style={{ fontWeight: 'thin', marginLeft: '50px', marginTop: '50px' }}>Account Settings</h1>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div style={{ marginLeft: 'auto', marginRight: '320px', maxWidth: '400px', marginTop: '50px' }}>
              <h3 style={{ fontWeight: 'thin' }}>Profile</h3>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <Button outline color="secondary" style={{ marginLeft: '300px', width: '150px', fontSize: '15px' }}>
                Account Settings
              </Button>
            </div>
          </Col>
        </Row>
        <Col>
          <Form style={{ marginLeft: '510px' }}>
            <FormGroup style={{ marginBottom: '30px', marginLeft: '100px' }}>
              <Label for="firstName">First Name:</Label>
              <Input type="text" id="firstName" value={firstName} onChange={handleFirstNameChange} />
            </FormGroup>
          </Form>
        </Col>
        <Col>
          <div className="text-center">
            <Button outline color="secondary" style={{ marginLeft: '300px', width: '150px', fontSize: '15px' }}>
              History
            </Button>
          </div>
        </Col>
        <Row>
          <Col>
            <Form style={{ marginLeft: '610px', marginBottom: '30px' }}>
              <FormGroup>
                <Label for="lastName">Last Name:</Label>
                <Input type="text" id="lastName" value={lastName} onChange={handleLastNameChange} />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Col>
          <div className="text-center">
            <Button outline color="secondary" style={{ marginLeft: '300px', width: '150px', fontSize: '15px' }}>
              Support
            </Button>
          </div>
          <Form style={{ marginLeft: '610px', flexGrow: 1, display: 'flex', alignItems: 'center' }}>
            <FormGroup style={{ marginRight: '10px' }}>
              <Label for="password">Password:</Label>
              <Input type="text" id="password" value={password} onChange={handlePasswordChange} />
            </FormGroup>
            <Button color="primary" type="submit" onClick={handleReservationSubmit} size="md">
              Update
            </Button>
          </Form>
        </Col>
        <Row>
        <Col>
  <div className="text-center" style={{ marginBottom: '550px', marginTop: '50px' }}>
    <Button outline color="secondary" style={{ marginLeft: '300px', width: '150px', fontSize: '15px' }}>
      Log out
    </Button>
  </div>
  <div>
    <div style={{ position: 'absolute', top: '740px', left: '950px' }}>
      <CardImg
        src="https://api.logo.com/api/v2/images?logo=logo_ab33ac0a-44f8-4bc0-b247-80938ee82a5d&format=webp&margins=0&quality=60&width=500&background=transparent&u=1686547325"
        alt="logo"
        style={{ maxWidth: '90px', maxHeight: '90px', marginLeft: '10px' }}
      />
    </div>
  </div>
</Col>

        </Row>
      </Container>
    </>
  );
}
