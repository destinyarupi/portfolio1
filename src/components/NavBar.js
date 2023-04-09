import { Nav, Container, Navbar, Button } from '../assets/data/Exports';
import { navLinks } from '../assets/data/Data'

export const NavBar = () => {
  const navlinks = navLinks.map(link => (
    <Nav.Link href={link.href} key={link.id}>
      {link.link}
    </Nav.Link>
  ))

  return (
    <Navbar collapseOnSelect expand="lg" bg="transparent" className='py-md-4 py-3'>
      <Container>
        <Navbar.Brand href="#hero" className='fs-3 text-white fw-bolder'>
            Arupi
            <span className='gradient-text fs-2'>
              NFT
            </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            {navlinks}
            <Button value='Select Wallet'/>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
