import React from 'react';
import { Container, Row, Col, Button, Form, Navbar, CardImg } from 'reactstrap';

export default function Support() {
  const handleReservationSubmit = (event) => {
    event.preventDefault();
    // Handle form submission logic here
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
              <h2 style={{ fontWeight: 'thin', marginLeft: '50px', marginTop: '50px' }}>Support</h2>
            </div>
          </div>
        </Container>
      </div>
      <Container>
        <Row>
          <Col>
            <div style={{ marginLeft: 'auto', marginRight: '320px', maxWidth: '400px', marginTop: '50px' }}>
              <h3>Help and support</h3>
              <h4 style={{ fontWeight: 'normal' }}>Help and support?</h4>
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
        <Row>
          <Col>
            <div>
              <Navbar className="bg-body-tertiary">
                <Container fluid>
                  <form
                    className="d-flex"
                    role="search"
                    style={{ marginLeft: '610px', fontSize: '20px', width: '400px' }}
                  >
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder=""
                      aria-label="Search"
                    />
                    <button className="btn btn-outline-success" type="submit">
                      Search
                    </button>
                  </form>
                </Container>
              </Navbar>
            </div>
          </Col>
        </Row>
        <Container className="custom-container">
          <Row>
            <Col style={{ marginLeft: '600px', marginTop: '50px' }}>
              <p>Still haven't found what you were looking for?</p>
              <Row>
                <Col>
                  <div className="text-center">
                    <Button outline color="secondary" style={{ marginLeft: '-300px', width: '150px', fontSize: '15px' }}>
                      History
                    </Button>
                  </div>
                  <p>you can write us about other topics on our full contact form or you can read</p>
                  <div className="text-center">
                    <Button outline color="secondary" style={{ marginLeft: '-300px', width: '150px', fontSize: '15px' }}>
                      Support
                    </Button>
                  </div>
                  <p>more information about trivago on our help center.</p>
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col>
              <div className="text-center">
                <Button outline color="secondary" style={{ marginLeft: '300px', width: '150px', fontSize: '15px' }}>
                  Log out
                </Button>
              </div>
            </Col>
            <Col>
              <Form
                style={{ marginLeft: '610px', flexGrow: 1, display: 'flex', alignItems: 'center' }}
                onSubmit={handleReservationSubmit}
              >
                {/* Add form fields and submit button */}
              </Form>
            </Col>
          </Row>
          
          <div className="container" style={{ display: 'flex', justifyContent: 'center',  }}>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px', marginLeft:'180px'}}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-telephone"
                viewBox="0 0 16 16"
              >
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
              </svg>
              <h5 style={{ fontWeight: 'normal' }}>+639456687921</h5>
            </div>

            <div style={{ display: 'flex', alignItems: 'center' }}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-envelope-at"
                viewBox="0 0 16 16"
              >
                <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                <path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.878-.614.878-.345 0-.531-.276-.531-.935Z" />
              </svg>
              <h5 style={{ fontWeight: 'normal', marginLeft: '5px' }}>support@trivago.com</h5>
              </div>
              <div style={{ position: 'absolute', top: '830px', left: '950px' }}>
            <CardImg
              src="https://api.logo.com/api/v2/images?logo=logo_ab33ac0a-44f8-4bc0-b247-80938ee82a5d&format=webp&margins=0&quality=60&width=500&background=transparent&u=1686547325"
              alt="logo"
              style={{ maxWidth: '90px', maxHeight: '90px', marginLeft: '10px' }}
            />
              </div>
          </div>
        </Container>
      </Container>
    </>
  );
}
