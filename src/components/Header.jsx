import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom'
import Badge from 'react-bootstrap/Badge';
import { useSelector } from 'react-redux';


function Header() {
  const wishlist = useSelector((state)=>state.wishlistreducer)//store represents store
  console.log(wishlist);
  const cart = useSelector((state)=>state.cartreducer)
  console.log(cart);
  return (
    <Navbar expand="lg" className="bg-primary ">
    <Container>
      <Navbar.Brand href="#home"><Link to = {'/'}style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-cart-shopping fs-3 me-3"></i>E-CART</Link> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link className=' btn border rounded border-secondary' ><Link to ={'/Wishlist'}style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-heart me-3"></i>Wishlist  <Badge bg="secondary" className='rounded'>{wishlist.length}</Badge></Link></Nav.Link>
          <Nav.Link className=' btn border rounded border-secondary ms-3'  ><Link to={'/Cart'}style={{textDecoration:"none",color:"white"}}><i class="fa-solid fa-cart-shopping me-3"></i>Cart  <Badge bg="secondary"className='rounded' >{cart.length}</Badge></Link></Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header