import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import houseIcon from '../../images/real-estate-price-svgrepo-com.svg'

export default function TextLinkExample() {
  return (
    <Navbar id='my-navbar' className="bg-blue" data-bs-theme="dark">
      <Container className=''>
        <Navbar.Brand href="#home">
          <img src={houseIcon} alt="troll-face"/>
          Paris House pricing prediction
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="react-project-3-title">
            Mini - Project
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}