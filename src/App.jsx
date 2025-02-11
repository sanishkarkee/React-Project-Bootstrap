import { Badge, Container, Navbar, Spinner } from 'react-bootstrap';

function App() {
  return (
    <>
      <h1>
        Example heading <Badge bg='secondary'>New</Badge>
      </h1>
      <br />
      <Spinner animation='grow' variant='success' />
      <br />
      <Navbar className='bg-body-tertiary'>
        <Container>
          <Navbar.Brand href='#home'>
            <img
              src='/assets/vite.svg'
              width='30'
              height='30'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
            <span style={{ color: '#00a19c' }}> Bootstrap Testing</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default App;
