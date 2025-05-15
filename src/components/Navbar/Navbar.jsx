import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import styles from './Navbar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import profile from '../../../src/assets/images/profile.png'

function TextLinkExample() {
  return (
    <Navbar className="shadow">
      <Container>
        <Navbar.Brand className={` d-flex gap-2 ${styles.navBrand}`} href="#home">
        <img className='w-25' src="/public/Frame.svg" alt="logo" />
          Barlex
          </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
        
          <Navbar.Text>
            <img className={`${styles.profile} pe-2`} src={profile} alt="" />
              Kristine Lemke
            <FontAwesomeIcon className='ps-2' icon={faAngleDown} />
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default TextLinkExample;