import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const MyNavBar = () => {
  return (
    <>
      <Navbar className=' bg-dark'>
        <Container>
          <Navbar.Brand href='#home' className='text-light'>
            Sanish Karki
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className='justify-content-end gap-3'>
            <Navbar.Text className='text-light'>Contact</Navbar.Text>
            <Navbar.Text className='text-light'>About</Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
