import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { removewishlist } from '../slices/wishlistslice';
import { addtocart } from '../slices/cartslice';


function Wishlist() {
  const wishlistarray = useSelector((state)=>state.wishlistreducer)
  console.log(wishlistarray);
  const dispatch = useDispatch()
   const handlewishlist = (item)=>{
    dispatch(addtocart(item))
    dispatch(removewishlist(item.id))
   }
  return (
    <div >
       <Row className='ms-5 me-5'style={{marginTop:"150px"}}>

      
     
    {wishlistarray?.length>0?
    wishlistarray.map((item)=>(<Col className='mb-5' sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={item.image} style={{height:"200px"}} />
    <Card.Body>
      <Card.Title className='fw-bolder'>{item.title.slice(0,20)}..</Card.Title>
      <Card.Text>
      <p>{item.description.slice(0,40)}...</p>
      <p className='fw-bolder'>Price:${item.price}</p>
      </Card.Text>
      <div className='d-flex align-items-center justify-content-between'>
      <Button onClick={()=>dispatch(removewishlist(item.id))} variant="outline-danger btn rounded"><i class="fa-solid fa-trash"></i></Button>
      <Button onClick={()=>handlewishlist(item)} variant="outline-success btn rounded"><i class="fa-solid fa-cart-shopping "></i> </Button>

      </div>
    </Card.Body>
  </Card>

    </Col>))
    :<div style={{height:"100vh"}} className='d-flex flex-column justify-content-center align-items-center'>
      <img style={{height:"300px"}} src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" />
      <h4>Your Wishlist is Empty</h4>
      <button className='btn btn-success rounded mt-3'>      <Link style={{textDecoration:"none",color:"white"}} to = {'/'}>Back to Home</Link>
</button>
    </div>
      }
     </Row>
      </div>
  )
}

export default Wishlist