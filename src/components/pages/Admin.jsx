import React, { useState } from 'react';
import { Container, Row, Col, Button, CardImg, Dropdown, DropdownToggle } from 'reactstrap';

export default function Admin() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => {
    setDropdownOpen((prevState) => !prevState);
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
              <h1 style={{ fontWeight: 'thin', marginLeft: '50px', marginTop: '50px' }}>Admin Management</h1>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div style={{ marginLeft: 'auto', marginRight: '320px', marginTop: '80px', maxWidth: '400px', marginTop: '50px' }}>
              <h3 style={{ fontWeight: 'thin' }}>Admin Information</h3>
            </div>
          </Col>
          <Col>
            <div className="text-center">
              <Button outline color="secondary" style={{ marginLeft: '300px', width: '150px', fontSize: '15px' }}>
                Admin Profile
              </Button>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="d-flex p-5" style={{ marginLeft: '610px' }}>
              <Dropdown isOpen={dropdownOpen} toggle={toggle} size="lg">
                <DropdownToggle caret>Admin Name(Default)</DropdownToggle>
              </Dropdown>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="text-center">
              <Button outline color="secondary" style={{ marginLeft: '300px', marginTop: '30px', width: '150px', fontSize: '15px' }}>
                Customer List
              </Button>
            </div>
          </Col>
          </Row>
          <Col>
            <div className="d-flex p-5" style={{ marginLeft: '610px' }}>
              <Dropdown isOpen={dropdownOpen} toggle={toggle} size="lg">
                <DropdownToggle caret>Email Account</DropdownToggle>
              </Dropdown>
            </div>
          </Col>
        <div>
          <div style={{ position: 'absolute', top: '590px', left: '950px' }}>
            <CardImg
              src="https://api.logo.com/api/v2/images?logo=logo_ab33ac0a-44f8-4bc0-b247-80938ee82a5d&format=webp&margins=0&quality=60&width=500&background=transparent&u=1686547325"
              alt="logo"
              style={{ maxWidth: '90px', maxHeight: '90px', marginLeft: '10px' }}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
