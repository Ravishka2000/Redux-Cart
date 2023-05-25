import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBarPanel = () => {
    const cartProducts = useSelector(state => state.cart);
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand to="/" as={Link}>iSHOPPING</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link to="/" as={Link}>Home</Nav.Link>
                    </Nav>
                    <Navbar.Toggle />
                    <Navbar.Collapse className='justify-content-end'>
                        <Navbar.Text>
                            <Nav.Link to='/cart' as={Link}>My Bag {cartProducts.length}</Nav.Link>
                        </Navbar.Text>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBarPanel
